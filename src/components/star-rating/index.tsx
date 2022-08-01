import { useMemo } from "react"
import { IconContext } from "react-icons"
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5"
import { useTheme } from "styled-components"
import { Row } from "../../styles/styles"

interface StarRatingProps {
    value: number
    maxValue?: number
}

const StarRating = ({ value, maxValue = 5 }: StarRatingProps) => {

    const stars = useMemo(() => {
        const score = (value * 5) / maxValue
        const integer = Math.trunc(score)
        const decimal = score - integer

        let result = {
            keyPrefix: `starRating ${score}`,
            fill: integer,
            half: false,
            outline: 4 - integer
        }

        if (decimal >= 0.75) result.fill++
        else if (decimal < 0.25) result.outline++
        else result.half = true

        return result
    }, [value, maxValue]);

    const theme = useTheme()

    return <IconContext.Provider value={{
        color: theme.starColor,
        size: '16px'
    }}>
        <Row gap='4px'>
            {
                [...Array(stars.fill)].map((_, index) =>
                    <IoStar key={`${stars.keyPrefix} fill ${index}`} />
                )
            }

            {
                stars.half && <IoStarHalf key={`${stars.keyPrefix} half`} />
            }

            {
                [...Array(stars.outline)].map((_, index) =>
                    <IoStarOutline key={`${stars.keyPrefix} outline ${index}`} />
                )
            }
        </Row>
    </IconContext.Provider>
}

export default StarRating