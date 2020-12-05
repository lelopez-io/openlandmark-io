import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Section, Container } from "../global";

type Client = {
    name: string;
    target_link: string;
    img_src: string;
};
type Clients = Array<Client>;

const clients: Clients = [
    {
        name: "jumpgodathletic",
        target_link: "https://jumpgodathletic.com/",
        img_src: "/images/clients/jumpgodathletic.png",
    },
    {
        name: "powa",
        target_link: "https://powa.sphere.club/",
        img_src: "/images/clients/powa.png",
    },
    {
        name: "sphere",
        target_link: "https://shop.sphere.club/",
        img_src: "/images/clients/sphere.png",
    },
    {
        name: "inaka",
        target_link: "https://inakapower.com/",
        img_src: "/images/clients/inakapower.png",
    },
    {
        name: "shawleycoker",
        target_link: "https://shawleycoker.com/",
        img_src: "/images/clients/shawleycoker.png",
    },
    {
        name: "cyberxfitness",
        target_link: "https://cyberxfitness.com/",
        img_src: "/images/clients/cyberxfitness.png",
    },
    {
        name: "speedlionathletics",
        target_link: "https://speedlionathletics.com/",
        img_src: "/images/clients/speedlionathletics.png",
    },
    {
        name: "rmfash",
        target_link: "https://rmfash.com/",
        img_src: "/images/clients/rmfash.png",
    },
    {
        name: "jennymlashes",
        target_link: "https://jennymlashes.com/",
        img_src: "/images/clients/jennymlashes.png",
    },
];

const ClientCatalog = () => {
    const logo_opacity = 0.7;
    const clients_shuffle = clients.sort(() => Math.random() - 0.5);

    const clientCatalog = clients_shuffle.map(function (client, index) {
        const is_last = index + 1 === clients_shuffle.length;
        const is_odd = (index + 1) % 2 > 0;

        return (
            <ClientCatalogItem
                key={index}
                className={[`statistic`].join(` `)}
                is_last={is_last}
                is_odd={is_odd}
            >
                <ClientCatalogLink href={client.target_link} target="_blank">
                    <ObjectiveIcon
                        className={[`fa`, client.img_src].join(` `)}
                        style={{
                            backgroundImage: `url("${client.img_src}")`,
                            opacity: logo_opacity,
                        }}
                    ></ObjectiveIcon>
                </ClientCatalogLink>
            </ClientCatalogItem>
        );
    });

    return (
        <StyledSection id="Objectives">
            <StyledContainer>
                <Subtitle>Trusted By</Subtitle>
                <SectionTitle>Customer Focused Brands</SectionTitle>
                <ClientCatalogGrid className="statistics">
                    {clientCatalog}
                </ClientCatalogGrid>
            </StyledContainer>
        </StyledSection>
    );
};

export default ClientCatalog;

const StyledSection = styled(Section)`
    padding-bottom: 120px;
`;
const StyledContainer = styled(Container)``;

const SectionTitle = styled.h3`
    color: ${(props) => props.theme.color.primary};
    display: flex;
    justify-content: center;
    margin: 0 auto 40px;
    text-align: center;
`;

const Subtitle = styled.h5`
    font-size: 16px;
    color: ${(props) => props.theme.color.accent};
    letter-spacing: 0px;
    margin-bottom: 12px;
    text-align: center;
`;

const ClientCatalogGrid = styled.div`
    max-width: 670px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px auto;
    grid-column-gap: 40px;
    grid-row-gap: 35px;
    @media (max-width: ${(props) => props.theme.screen.sm}) {
        grid-template-columns: 1fr;
        padding: 0 64px;
    }
`;

interface ClientCatalogItemProps {
    is_last: boolean;
    is_odd: boolean;
}

const ClientCatalogItem = styled.div<ClientCatalogItemProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        margin-left: ${(props) =>
            props.is_last && props.is_odd ? "67%" : "unset"};
    }
`;

const ClientCatalogLink = styled.a`
    margin-top: 1.75rem;
    margin-bottom: 0.75rem;
`;

const ObjectiveIcon = styled.span`
    height: 150px;
    width: 250px;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`;

const ObjectiveTitle = styled.h5`
    color: ${(props) => props.theme.color.primary};
    letter-spacing: 0px;
    line-height: 30px;
    margin-bottom: 10px;
`;

const ObjectiveText = styled.p`
    text-align: center;
`;
