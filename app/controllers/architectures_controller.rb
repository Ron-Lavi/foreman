class ArchitecturesController < ApplicationController
  include ApplicationHelper
  include Foreman::Controller::AutoCompleteSearch
  include Foreman::Controller::Parameters::Architecture

  before_action :find_resource, :only => [:edit, :update, :destroy]

  def index
    @architectures = resource_base_search_and_page.includes(:operatingsystems)
    respond_to do |format|
      format.html do
        render "index"
      end
      format.json do
        render json: {
          rows: rows(@architectures),
          columns: columns,
          item_count: @architectures.count,
          header: _("Architectures"),
          title: _("Foreman Architectures"), # optional, sets the browser tab title
          page_actions: page_actions,
        }, status: :ok
      end
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

  def controller_permission
    'architectures'
  end

  def columns
    [js_sortable_col(_('Name'), 'name'), _('Operating systems'), _('Hosts')]
  end

  def rows(architectures)
    architectures.map do |arch|
      name = js_link_if_can_edit(arch, edit_architecture_path(:id => arch), arch.name)
      os = arch.operatingsystems.map(&:to_label).to_sentence
      hosts_count = js_link_to(hosts_count(:architecture)[arch], hosts_path(:search => "architecture = #{arch}"))
      { cells: [name, os, hosts_count], actions: row_actions(arch) }
    end
  end

  def row_actions(arch)
    [
      js_delete_if_authorized(arch.id, _("Delete %s?") % arch.name, architecture_path(:id => arch)),
    ]
  end

  def page_actions
    [js_link_to(_("Create"), new_architecture_path)]
  end
end
