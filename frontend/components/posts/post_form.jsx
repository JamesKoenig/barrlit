import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state["body"] = props.body || '';
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   _handleSubmit(event) {
    event.preventDefault();
     this.props.action(this.state);
  }

  _update(event) {
    this.setState( { body: event.currentTarget.value } );
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="form-input-container">
          <textarea onChange={this._update}
                    value={this.state.body} ></textarea>
        </div>
        <button type="submit">{this.props.formType}</button>
      </form>
    )
  }
}

export default PostForm
