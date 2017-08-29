import './profile.less';

export default class Profile extends React.Component{
  render(){
    return (
      <dl className="g-profile">
        <dt><img src={require("~/assets/img/profile.jpg")} /></dt>
        <dd className="name"></dd>
        <dd className="job" style={{color: this.props.skin}}>web前端开发</dd>
      </dl>
    )
  }
}
