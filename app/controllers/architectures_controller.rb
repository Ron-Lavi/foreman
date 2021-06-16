class ArchitecturesController < ApplicationController
  include ApplicationHelper
  include Foreman::Controller::AutoCompleteSearch
  include Foreman::Controller::Parameters::Architecture

  before_action :find_resource, :only => [:edit, :update, :destroy]

  def index
    @architectures = resource_base_search_and_page.includes(:operatingsystems)
    respond_to do |format|
      format.html {
        render "index"
      }
      format.json {
        render json: {
          rows: rows(@architectures),
          row_actions: row_actions,
          columns: columns,
          item_count: @architectures.count,
          header: _("Architectures"),
          title: _("Architectures"), # optional
        }, status: :ok
      }
    end
  end

  def new
    @architecture = Architecture.new
  end

  def create
    @architecture = Architecture.new(architecture_params)
    if @architecture.save
      process_success
    else
      process_error
    end
  end

  def edit
  end

  def update
    if @architecture.update(architecture_params)
      process_success
    else
      process_error
    end
  end

  def destroy
    if @architecture.destroy
      process_success
    else
      process_error
    end
  end

  private

  def canEdit?(id)
    authorized_for(controller: :architectures, action: :update, id: id)
  end

  def canDelete?(id)
    authorized_for(controller: :architectures, action: :destroy, id: id)
  end

  def row_permissions(a)
    { canEdit: canEdit?(a), canDelete: canDelete?(a) }
  end

  def columns
   [
      {
        sortKey: 'name',
        title: _('Name'),
        width: 15,
      },
      {
        title: _('Operating systems'),
        width: 70,
      },
      {
        title: _('Hosts'),
        width: 15,
      },
    ]
  end

  def rows(architectures)
    rows = []
    architectures.map do |a|
      name = canEdit?(a) ? { type: 'link', label: a.name, path: edit_architecture_path(:id => a) } : a.name
      os = a.operatingsystems.map(&:to_label).to_sentence
      hosts_count = { type: 'link', label: hosts_count(:architecture)[a], path: hosts_path(:search => "architecture = #{a}") }
      rows << { cells: [ name, os, hosts_count], permissions: row_permissions(a) }
    end
    rows
  end

  def row_actions
    [{ title: _("delete"), need_permission: "canDelete" }]
  end
end
