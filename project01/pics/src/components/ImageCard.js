import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    // using React Ref system
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    // too early to get the height of the image
    // bcoz the image has not been downloaded for the unsplash itself
    // thus it shows image height as zero for each image
    console.log(this.imageRef.current.clientHeight);
    //get the height of the image using the Ref system
    // this is javascript event listener
    // callback passed as props to the event listener
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  // this is required bcoz property gridRowEnd requires units in spans
  // use arrow function to avoid error for "this"
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    //this.setState({spans: spans});
    // ES2015 syntax
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
      // <div>
      //   <img 
      //     ref={this.imageRef}
      //     alt={this.props.image.description} 
      //     src={this.props.image.urls.regular}
      //   />
      // </div>
    );
  }
}

export default ImageCard;
