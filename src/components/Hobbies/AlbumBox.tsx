import type { albumContent } from "../../types/types"
import { Link } from "react-router-dom"

const albumBox: React.FC<albumContent> = ({imageURL, albumName, albumArtist, url}) => {
    return(
        <Link to={url}>
            <img src={imageURL} alt={albumName}></img>
            <div>
                <div>{albumName}</div>
                <div>{albumArtist}</div>
            </div>
        </Link>

    )
}

export default albumBox