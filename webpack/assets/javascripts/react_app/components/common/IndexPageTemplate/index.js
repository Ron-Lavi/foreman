import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../PF4/Table';
import PageLayout from '../../../routes/common/PageLayout/PageLayout';
import { fetchData } from '../../PF4/Table/TableActions';
import { getControllerSearchProps } from '../../../constants';
import './index.scss';
import { selectSearch, selectResponse } from '../../PF4/Table/TableSelectors';
import { getTableAPIKey } from '../../PF4/Table/TableHelpers';

const IndexPageTemplate = ({
  path,
  layoutProps,
  tableProps,
  paginationProps,
}) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearch);
  const { title, header } = useSelector(state =>
    selectResponse(state, getTableAPIKey(path))
  );
  const onSearch = nextQuery =>
    dispatch(fetchData(path, { query: nextQuery, page: 1 }));
  return (
    <PageLayout
      className="index_page_template"
      searchable
      searchQuery={searchQuery}
      searchProps={getControllerSearchProps(path)}
      onSearch={onSearch}
      header={header}
      title={title}
      {...layoutProps}
    >
      <Table
        requestPath={path}
        {...tableProps}
        paginationProps={paginationProps}
      />
    </PageLayout>
  );
};

export default IndexPageTemplate;
