const layoutStyle = {
	fontFamily : 'Arial',
	textAlign : 'center'
}

const Layout = (props) => ( <div style={layoutStyle}> {props.children} </div>)

export default Layout;