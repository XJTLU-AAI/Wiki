import { Image } from 'react-bootstrap';

function ImageLink(props) {
    return (
        <a href={props.link} style={{textDecoration:'none'}}>
            <div style={{padding: 24, textDecoration: 'none', color: 'black'}}>
                <Image className='image-link-image' src={props.imageSrc} />
                <div style={{ fontSize: 20}}>{props.title}</div>
            </div>
        </a>
    );
}

export {
    ImageLink
}