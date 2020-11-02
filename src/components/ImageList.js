import React from "react"

const ImageList = (props) => {
	const imglist = props.imagelist.map((img) => {
		return <img alt={img.description} key={img.id} src={img.urls.regular}></img>
	})
	return (
		<div className="ui segment">
			<div className="ui equal width grid">
				<div className="column">{imglist}</div>
			</div>
		</div>
	)
}

export default ImageList
