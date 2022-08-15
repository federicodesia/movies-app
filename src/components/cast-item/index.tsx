import { imagesService } from "../../services/images-service"
import { Cast } from "../../services/movies-service/dto"
import { ProfileImg } from "../../styles/profile-image"
import { Row, Column } from "../../styles/styles"
import { Text, Title } from "../../styles/text"

interface CastItemProps {
    cast: Cast
}

const CastItem = ({ cast }: CastItemProps) => {
    return <Row gap='16px' alignItems='center'>
        <ProfileImg
            src={imagesService.getPosterUrl(cast.profile_path)}
            alt={cast.name} 
            altType='initials' />

        <Column gap='4px'>
            <Title maxLines={1}>{cast.name} </Title>
            <Text maxLines={1}>{cast.character} </Text>
        </Column>
    </Row>
}

export default CastItem