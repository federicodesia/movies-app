import { imagesService } from "../../services/images-service"
import { Cast } from "../../services/movies-service/dto"
import { Row, Column } from "../../styles/styles"
import { Text, Title } from "../../styles/text"
import { ProfileImage } from "./style"

interface CastItemProps {
    cast: Cast
}

const CastItem = ({ cast }: CastItemProps) => {
    return <Row gap='16px' alignItems='center'>
        <ProfileImage src={imagesService.getPosterUrl(cast.profile_path)} />

        <Column gap='4px'>
            <Title maxLines={1}>{cast.name} </Title>
            <Text maxLines={1}>{cast.character} </Text>
        </Column>
    </Row>
}

export default CastItem