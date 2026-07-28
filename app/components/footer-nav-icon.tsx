interface FooterNavIconLinkProps {
    linkAddress: string,
    linkIcon: React.ReactNode,
}

const FooterNavIconLink = ({linkAddress, linkIcon}: FooterNavIconLinkProps) => {
    return (
        <a className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all" href={linkAddress} >
            {linkIcon}
        </a>
    )
}

export default FooterNavIconLink;