import React from "react"

const ImageList = (props) => {
	// Deconstructed the properties of image's description, id and urls.
	const imglist = props.imagelist.map(({description, id, urls}) => {
		return <img alt={description} key={id} src={urls.regular}></img>
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
