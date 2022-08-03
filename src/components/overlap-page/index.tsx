import { ReactNode, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import NavBar from "../nav-bar"
import { PositionAbsolute, HeaderWrapper, HeaderContent, PageContentWrapper, HeaderChildren, HeaderBackdrop } from "./style"

interface OverlapPageProps {
    header?: {
        backdrop?: ReactNode
        children?: ReactNode
    }
    children?: ReactNode
}

const OverlapPage = ({ header, children }: OverlapPageProps) => {
    const { pathname } = useLocation()
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [pathname])

    return <PositionAbsolute ref={scrollRef}>
        {
            <HeaderWrapper>
                {
                    header?.backdrop && <HeaderBackdrop>
                        {header?.backdrop}
                    </HeaderBackdrop>
                }

                <HeaderContent>
                    <NavBar />
                    {
                        header?.children && <HeaderChildren>
                            {header?.children}
                        </HeaderChildren>
                    }
                </HeaderContent>
            </HeaderWrapper>
        }

        {
            children && <PageContentWrapper>
                {children}
            </PageContentWrapper>
        }
    </PositionAbsolute>
}

export default OverlapPage