// @flow
import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticTitleExtra,
  StaticParagraphStyle,
  StaticThirdLevelTitleStyle,
  StaticSquareListStyle,
  StaticSquareListItemStyle,
  StaticPrimaryUnorderedListItemStyle,
  StaticPrimaryUnorderedListStyle,
} from './style';

export const Cookies = () => (
  <>
    <MetaTags title="Gestion des cookies - Place by Make.org" />
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        Gestion des cookies
        <StaticTitleExtra>- en date du 18 mai 2021 -</StaticTitleExtra>
      </StaticSecondLevelTitleStyle>
      <StaticThirdLevelTitleStyle>
        QU‘EST-CE QU‘UN COOKIE ?
      </StaticThirdLevelTitleStyle>
      <StaticParagraphStyle>
        Un cookie est un petit fichier informatique qui peut être déposé et lu
        lors de la consultation par un internaute d‘un site internet ou d‘une
        application mobile et ce, quel que soit le type de terminal utilisé
        (ordinateur, smartphone, etc...). Certains cookies sont essentiels au
        bon fonctionnement des sites ou applications, d’autres contribuent à
        optimiser leur performance du site ou à améliorer l’expérience des
        internautes.
      </StaticParagraphStyle>
      <StaticThirdLevelTitleStyle>
        COMMENT UTILISONS-NOUS LES COOKIES ?
      </StaticThirdLevelTitleStyle>
      <StaticParagraphStyle>
        Lorsque vous vous connectez sur notre site, des cookies sont déposés sur
        votre terminal afin d’améliorer votre expérience, accroître la
        performance de notre site et optimiser nos consultations citoyennes. Les
        informations contenues dans les cookies ne visent pas à vous identifier
        personnellement et ne sont jamais utilisées à d‘autres fins que celles
        indiquées ci-après.
      </StaticParagraphStyle>
      <StaticThirdLevelTitleStyle>
        QUELS COOKIES UTILISONS NOUS ?
      </StaticThirdLevelTitleStyle>
      <StaticParagraphStyle>
        Les cookies déposés sur notre site sont les suivants :
      </StaticParagraphStyle>
      <StaticPrimaryUnorderedListStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticParagraphStyle>
            Les cookies techniques : ces cookies sont nécessaires au
            fonctionnement du site et ne peuvent pas être désactivés. Vous
            pouvez configurer votre navigateur afin de bloquer ou être informé
            de l‘existence de ces cookies, mais certaines parties de notre site
            peuvent être affectées. Ces cookies ne visent pas à vous identifier
            personnellement. Toujours actif.
          </StaticParagraphStyle>
          <StaticSquareListStyle>
            <StaticSquareListItemStyle>
              make-secure : une fois que vous vous êtes connecté à votre espace
              citoyen sur Place by Make.org, ce cookie garantit que cette
              connexion va se maintenir pendant votre navigation sur le service.
              Durée : Session.
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              make-secure-expiration: ce cookie sert à détecter votre inactivité
              sur le service de façon à faire expirer cette connexion. Durée :
              Session.
            </StaticSquareListItemStyle>
          </StaticSquareListStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticParagraphStyle>
            Les cookies de préférences : ces cookies sont utilisés pour retenir
            vos préférences sur notre site et ainsi améliorer votre expérience
            lors de votre navigation. Vous pouvez configurer votre navigateur
            afin de bloquer ou être informé de l’existence de ces cookies, mais
            certaines parties de notre site peuvent être affectées. Ces cookies
            ne visent pas à vous identifier personnellement. Toujours actif.
          </StaticParagraphStyle>
          <StaticSquareListStyle>
            <StaticSquareListItemStyle>
              make-session-id : ce cookie sert à regrouper toutes les actions
              que vous effectuez sur le site dans une session. Durée : Session.
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              make-session-id-expiration : ce cookie permet de vous afficher la
              notification indiquant que votre session a expiré (au bout de 20
              minutes) et va donc être rechargée. Durée : Session.
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              make-cookie : ce cookie permet de nous assurer que vous avez été
              informé de notre politique de gestion des cookies. Durée : 1 an.
            </StaticSquareListItemStyle>
          </StaticSquareListStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticParagraphStyle>
            Les cookies de statistiques : ces cookies sont destinés à analyser
            les visites sur notre site et à améliorer les performances de ce
            dernier. Toutes les informations collectées par ces cookies sont
            agrégées et donc anonymisées. Si vous n‘acceptez pas ces cookies,
            nous ne serons pas informés de votre revisite. Toujours actif.
          </StaticParagraphStyle>
          <StaticSquareListStyle>
            <StaticSquareListItemStyle>
              make-visitor-id: ce cookie sert à identifier un visiteur unique.
              Durée : 1 an.
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              make-visitor-created-at : ce cookie sert à obtenir la date de la
              première visite sur la plateforme. Durée : 1 an.
            </StaticSquareListItemStyle>
          </StaticSquareListStyle>
        </StaticPrimaryUnorderedListItemStyle>
      </StaticPrimaryUnorderedListStyle>
    </StaticPageWrapperStyle>
  </>
);

// default export needed for loadable component
export default Cookies; // eslint-disable-line import/no-default-export
