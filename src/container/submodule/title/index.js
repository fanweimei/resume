import './title.less';

export default class Title extends React.Component{
  render(){
    return (
      <div className={`g-title ${this.props.classname}`}>
        <span className="line"></span>
        <span className="title">{this.props.children}</span>
        <span className="line"></span>
      </div>
    )
  }
}
