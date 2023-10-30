import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    role: string,
    link: string,
    acceptableRoles: string[]
} & React.PropsWithChildren

const NavByRole = ({ acceptableRoles, link, role, children }: Props) => {
    if(!acceptableRoles.find(r => r == role)) return (
        <>
            {children}
        </>
    )


    return (
        <Link to={link}>
            {children}
        </Link>
    )
}
export default NavByRole
