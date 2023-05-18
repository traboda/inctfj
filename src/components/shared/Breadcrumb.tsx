import React from 'react';
import shortid from 'shortid';
import Link from 'next/link';
import styled from '@emotion/styled';

const BreadcrumbWrapper = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    li {
        opacity: 0.75;
        list-style: none;
        margin-right: 0.75rem;
        a {
            color: inherit;
            text-decoration: none!important;
        }
        &:after {
            margin-left: 0.75rem;
            content: '/';
        }
    }
`;

type Breadcrumb = {
    items: {
        link?: string,
        title?: string,
        isActive?: boolean
    }[]
};

const Breadcrumb = ({ items }: Breadcrumb) => (
    <BreadcrumbWrapper>
        <li>
            <Link legacyBehavior href="/" className="hover:text-primary">
                <i className="fa fa-home" />
            </Link>
        </li>
        {items.length > 0 &&
        items.map((i) =>
            <li key={shortid.generate()}>
                {i.isActive ? i.title : (
                    <Link legacyBehavior passHref href={i?.link||'#'}>
                        <a className="hover:text-primary">
                            {i.title}
                        </a>
                    </Link>
                )}
            </li>
        )}
    </BreadcrumbWrapper>);

export default Breadcrumb;