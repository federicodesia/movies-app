import { ReactNode } from "react"
import NavBar from "../../components/nav-bar"
import { PositionAbsolute, BackdropWrapper, HeaderWrapper, HeaderContent, PageContentWrapper, HeaderChildren } from "./style"

interface PageProps {
    header?: {
        backdrop: ReactNode
        children: ReactNode
    }
    children: ReactNode
}

const Page = ({ header, children }: PageProps) => {
    return <PositionAbsolute>
        {
            header && <HeaderWrapper>
                <BackdropWrapper>
                    {header.backdrop}
                </BackdropWrapper>

                <HeaderContent>
                    <NavBar />
                    <HeaderChildren>
                        {header.children}
                    </HeaderChildren>
                </HeaderContent>
            </HeaderWrapper>
        }

        <PageContentWrapper>
            {children}
        </PageContentWrapper>
    </PositionAbsolute>
}

export default Page