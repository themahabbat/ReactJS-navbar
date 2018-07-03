import React from 'react'

const initNavItem = (where, item) => {

   if (typeof item == "string") {
      where = (where !== "center" && item !== "") ? where + " " + where + "-full" : where;

      return (<div className={where}>{item}</div>)
   }
   
   else if (typeof item == "object" && typeof item.type == "undefined") {
      where = (where !== "center" && item.content !== "") ? where + " " + where + "-full" : where;
      let onClick = () => item.onClick ? item.onClick() : null;

      return (
         <div className={where} onClick={() => onClick()}>{item.content}</div>
      )
   }

}

export default class Nav extends React.Component {
   constructor(props) {
      super(props)

      let navState = this.props.state

      this.state = {
         left: initNavItem("left", navState.left),
         center:initNavItem("center", navState.center),
         right: initNavItem("right", navState.right)
      }

   }

   renderNav() {
      let { left, center, right } = this.state
      
      if(!left) left = (<div className="left"></div>)
      if(!center) center = (<div className="center"></div>)
      if (!right) right = (<div className="right"></div>)
      
      return (
         <div className="nav">
               {left}
               {center}
               {right}
         </div>
      )
   }

   render() {
      return this.renderNav()
   }
}