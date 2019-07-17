/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import StoreForm from 'components/StoreForm'

export default class ManageStore extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      action: undefined,
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  componentWillMount() {
    if (this.props.match.path.indexOf('edit') != -1) {
      this.setState({ action: 'edit' })
    }
    if (this.props.match.path.indexOf('add') != -1) {
      this.setState({ action: 'add' })
    }
    if (this.props.match.path.indexOf('view') != -1) {
      this.setState({ action: 'view' })
    }
  }

  componentDidMount() {
    if (
      (this.state.action == 'edit' || this.state.action == 'view') &&
      this.props.info
    ) {
      const store = this.props.info.stores.find(
        storeObj => storeObj.id == this.props.match.params.id
      )
      this.props.onStoreDetailsChange(store)
    } else {
      this.props.onStoreDetailsChange({ id: null, name: null, address: null })
    }
  }

  handleChange = async event => {
    const storeDetails = Object.assign({}, this.props.store)
    storeDetails[event.target.name] = event.target.value

    this.props.onStoreDetailsChange(storeDetails)
  }

  async onSave() {
    switch (this.state.action) {
      case 'edit':
        await this.props.onEdit()
        break
      case 'add':
        await this.props.onAdd()
        break
      default:
        break
    }
    this.context.router.history.push(`/admin/stores`)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Manage Stores</title>
          <meta name="description" content="Dashboard page" />
        </Helmet>
        {(this.props.store.id || this.state.action == 'add') &&
          this.props.info && (
            <StoreForm
              storeDetails={this.props.store}
              handleChange={this.handleChange}
              onSave={this.onSave}
              action={this.state.action}
            />
          )}
      </div>
    )
  }
}

ManageStore.propTypes = {
  onEdit: PropTypes.func,
  onAdd: PropTypes.func,
  onStoreDetailsChange: PropTypes.func,
  info: PropTypes.object,
  store: PropTypes.object,
}
