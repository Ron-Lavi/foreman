/* eslint-disable camelcase */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { Pagination, PaginationVariant } from '@patternfly/react-core';
import {
  TableText,
  Table as PF4Table,
  TableHeader,
  TableBody,
  sortable,
  cellWidth,
} from '@patternfly/react-table';

import { useForemanSettings } from '../../../Root/Context/ForemanContext';
import { STATUS } from '../../../constants';
import TableEmptyState from './components/EmptyState';
import { getSortColumnIndex, getPerPageOptions } from './TableHelpers';

const Table = ({
  page,
  perPage: urlPerPage,
  status,
  sortBy,
  sortOrder,
  query,
  itemCount,
  fetchData,
  onTableSetPage,
  onTablePerPageSelect,
  onTableSort,
  error,
  response,
  requestPath: path,
  tableProps,
  paginationProps,
  ...props
}) => {
  const { perPage: appPerPage } = useForemanSettings();
  const perPage = urlPerPage || appPerPage;
  const [rows, setRows] = React.useState([]);
  const [actions, setActions] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  const handleRowActions = serverActions =>
    serverActions.map(({ title, need_permission }) => ({
      title,
      onClick: (event, rowId, rowData, extra) => {
        if (need_permission) {
          if (rowData.permissions[need_permission]) {
            console.log('I can be deleted');
          }
        }
      },
    }));

  const handleRows = serverRows =>
    serverRows.map(({ cells, permissions, ...row }) => ({
      ...row,
      cells: cells.map(cell => {
        if (typeof cell === 'object') {
          if (cell.type === 'link') {
            return (
              <TableText wrapModifier="nowrap">
                <a href={cell.path}>{cell.label}</a>
              </TableText>
            );
          }
        }
        return cell;
      }),
      permissions,
    }));

  const handleColumns = serverColumns =>
    serverColumns.map(({ title, sortKey, width }) => {
      const col = { title, transforms: [] };
      if (sortKey) {
        col.sortKey = sortKey;
        col.transforms = [...col.transforms, sortable];
      }
      if (width) {
        col.transforms = [...col.transforms, cellWidth(width)];
      }
      return col;
    });

  useEffect(() => {
    fetchData(path, { page, perPage, query, sortBy, sortOrder });
  }, []);

  useEffect(() => {
    if (status === STATUS.RESOLVED && !isEmpty(response)) {
      response.rows && setRows(handleRows(response.rows.asMutable()));
      response.row_actions &&
        setActions(handleRowActions(response.row_actions));
      response.columns && setColumns(handleColumns(response.columns));
    }
  }, [response, status]);

  return (
    <>
      <Pagination
        itemCount={itemCount}
        perPage={perPage}
        page={page}
        variant={PaginationVariant.top}
        onSetPage={(e, pageNo) => onTableSetPage(pageNo, path)}
        onPerPageSelect={(e, perP) => onTablePerPageSelect(perP, path)}
        perPageOptions={getPerPageOptions(urlPerPage, appPerPage)}
        {...paginationProps}
      />
      <PF4Table
        sortBy={{
          index: getSortColumnIndex(columns, sortBy),
          direction: sortOrder,
        }}
        onSort={(e, index, direction) =>
          onTableSort(index, direction, columns, path)
        }
        cells={columns}
        rows={rows}
        aria-label={`table${path}`}
        actions={actions}
        columns={columns}
        {...props}
      >
        <TableHeader />
        <TableBody />
      </PF4Table>
      <TableEmptyState status={status} error={error} rowsLength={rows.length} />
    </>
  );
};

Table.propTypes = {
  page: PropTypes.number,
  perPage: PropTypes.number,
  status: PropTypes.string,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  itemCount: PropTypes.number.isRequired,
  onTableSetPage: PropTypes.func.isRequired,
  onTablePerPageSelect: PropTypes.func.isRequired,
  onTableSort: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  query: PropTypes.string,
  error: PropTypes.string,
  response: PropTypes.object,
  requestPath: PropTypes.string.isRequired,
  mapResponseToRows: PropTypes.func,
  columns: PropTypes.array.isRequired,
  tableProps: PropTypes.object,
  paginationProps: PropTypes.object,
};

Table.defaultProps = {
  page: 1,
  perPage: null,
  status: null,
  sortBy: '',
  sortOrder: '',
  query: '',
  error: '',
  response: {},
  mapResponseToRows: response => response,
  tableProps: {},
  paginationProps: {},
};

export default Table;
