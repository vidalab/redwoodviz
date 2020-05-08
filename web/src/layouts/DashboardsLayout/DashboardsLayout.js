import Header from '../../pages/Common/Header'

const DashboardsLayout = (props) => {
  return (
    <div className="rw-scaffold" style={{height: "100%"}}>
      <Header name="Vida"/>
      <main style={{height: "calc(100% - 60px)", marginTop: "60px"}}>{props.children}</main>
    </div>
  )
}

export default DashboardsLayout