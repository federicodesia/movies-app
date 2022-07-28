import { ReactNode } from "react"
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
    return <PositionAbsolute>
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