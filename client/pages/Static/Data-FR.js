// @flow
import React from 'react';
import {
  RedLinkHTMLElementStyle,
  NewWindowIconStyle,
} from 'Client/ui/Elements/LinkElements';
import { CONTACT_EMAIL } from 'Shared/constants/config';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticTitleExtra,
  StaticParagraphStyle,
  StaticPrimaryUnorderedListStyle,
  StaticPrimaryUnorderedListItemStyle,
  StaticThirdLevelTitleStyle,
  StaticSquareListStyle,
  StaticSquareListItemStyle,
} from './style';

export const DataFR = () => (
  <>
    <MetaTags title="Charte de données personnelles - Make.org" />
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        Charte de données personnelles
        <StaticTitleExtra>- en date du 03/06/2020 -</StaticTitleExtra>
      </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        {
          'Cette consultation a été commanditée à et est mise en œuvre par la société Make.org, Société par Actions Simplifiées, ayant son siège social au 4 rue René Villermé, 75011 Paris, immatriculée au '
        }
        <abbr title="Registre du Commerce et des Sociétés">RCS</abbr>
        {' de PARIS sous le numéro 820 016 095 (ci-après « Make.org »).'}
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Les données personnelles des utilisateurs de la consultation seront
        traitées par Make.org en sa qualité de responsable de traitement.
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Le présent document représente les engagements de Make.org en ce qui
        concerne le respect de la réglementation en vigueur applicable au
        traitement de données personnelles et, en particulier, le règlement (
        <abbr title="Union Européean">UE</abbr>
        {
          ') 2016/679 du Parlement européen et du Conseil du 27 avril 2016 (ci-après, « le '
        }
        <abbr title="Réglement Général de Protection des Données">RGPD</abbr>
        {' »).'}
      </StaticParagraphStyle>
      <StaticPrimaryUnorderedListStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticThirdLevelTitleStyle>
            DESCRIPTION DU TRAITEMENT
          </StaticThirdLevelTitleStyle>
          <StaticParagraphStyle>
            Make.org est particulièrement soucieuse de la protection des données
            personnelles en général et de celle des utilisateurs de ses
            plateformes en particulier. Il s’agit pour Make.org de l’une des
            valeurs fondamentales du numérique et d’une condition essentielle de
            la liberté de conscience. À cette fin, Make.org s’engage à limiter
            la quantité de données personnelles recueillies à ce qui est
            seulement nécessaire pour le fonctionnement de la plateforme dédiée
            à la consultation.
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            En conséquence, Make.org ne pourra procéder à un traitement de
            données personnelles que dans le strict exercice de sa mission et
            selon les finalités suivantes :
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                utilisation et amélioration de la plateforme dédiée à la
                consultation ; et
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                mise en œuvre de la consultation.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            La base légale des traitements de données personnelles effectués par
            Make.org est le consentement des utilisateurs de la plateforme
            dédiée à la consultation.
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            Les données personnelles traitées par Make.org sont :
          </StaticParagraphStyle>
          <StaticSquareListStyle>
            <StaticSquareListItemStyle>
              <b>Identité :</b>
              {' Prénom*, date de naissance, profession ;'}
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              <b>Connexion :</b>
              {
                ' Adresse IP* et/ou, en cas d’ouverture d’un compte personnalisé auprès de Make.org, adresse email, mot de passe ;'
              }
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              <b>Participation à la consultation :</b>
              {
                ' Réactions aux propositions soumises à consultation* et, le cas échéant, soumission de propositions aux autres utilisateurs sur la plateforme.'
              }
            </StaticSquareListItemStyle>
          </StaticSquareListStyle>
          <StaticParagraphStyle>
            {'Les données personnelles requises par Make.org pour participer '}
            <i>a minima</i>
            {
              ' à la consultation sont identifiées ci-dessus par un astérisque : un refus de fournir ces données empêchera de réagir aux propositions soumises à consultation.'
            }
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            La non-fourniture des données personnelles non identifiées ci-dessus
            par un astérisque n’invalidera pas la participation de l’utilisateur
            à la consultation mais l’empêchera de soumettre des propositions à
            la consultation.
          </StaticParagraphStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticThirdLevelTitleStyle>
            OBLIGATIONS DE MAKE.ORG
          </StaticThirdLevelTitleStyle>
          <StaticParagraphStyle>Make.org s’engage à :</StaticParagraphStyle>
          <StaticSquareListStyle>
            <StaticSquareListItemStyle>
              traiter les données uniquement pour les seules finalités de sa
              mission ;
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              garantir la confidentialité des données à caractère personnel ;
            </StaticSquareListItemStyle>
          </StaticSquareListStyle>
          <StaticParagraphStyle>
            En particulier, Make.org veillera à ce que les tiers autorisés à
            traiter les données personnelles:
          </StaticParagraphStyle>
          <StaticSquareListStyle>
            <StaticSquareListItemStyle>
              ‍ s’engagent à respecter la confidentialité ou soient soumis à une
              obligation légale appropriée de confidentialité ;
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              prennent en compte, s’agissant de leurs outils, produits,
              applications ou services, les principes de protection des données
              dès la conception et de protection des données par défaut (Privacy
              By Design).
            </StaticSquareListItemStyle>
          </StaticSquareListStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticThirdLevelTitleStyle>DESTINATAIRES</StaticThirdLevelTitleStyle>
          <StaticParagraphStyle>
            Les données personnelles traitées en exécution de la mission ne
            pourront faire l’objet d’aucune divulgation à des tiers en dehors
            des cas prévus ci-dessous, ou par une disposition légale ou
            réglementaire.
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            Ainsi, peuvent, dans le seul but d’accomplir leurs missions
            respectives, avoir accès aux données personnelles :
          </StaticParagraphStyle>
          <StaticSquareListStyle>
            <StaticSquareListItemStyle>
              les personnes chargées de l’exécution de la consultation, celles
              chargées de traiter la relation avec les utilisateurs et les
              réclamations, celles chargées des services logistiques et
              informatiques ainsi que leurs responsables hiérarchiques ;
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              les éventuels sous-traitants de Make.org ;
            </StaticSquareListItemStyle>
            <StaticSquareListItemStyle>
              en ce qui concerne les seules données de participation à la
              consultation, le commanditaire de la consultation –étant précisé
              que celui-ci n’aura pas accès aux données relatives à l’identité
              des participants ainsi qu’aux données de connexion.
            </StaticSquareListItemStyle>
          </StaticSquareListStyle>
          <StaticParagraphStyle>
            Enfin, les données relatives à la participation à la consultation
            sont disponibles de manière anonymisée en open source –à
            l’exclusion, évidemment, des données relatives à l’identité des
            utilisateurs ainsi que des données de connexion.
          </StaticParagraphStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticThirdLevelTitleStyle>
            EXERCICE DES DROITS DES UTILISATEURS
          </StaticThirdLevelTitleStyle>
          <StaticParagraphStyle>
            Les utilisateurs bénéficient d’un droit d’accès à leurs données
            personnelles, d’un droit de rectification de leurs données
            personnelles, d’un droit d’effacement de leurs données personnelles,
            d’un droit à la limitation du traitement de leurs données
            personnelles, droit à la portabilité de leurs données personnelles,
            d’un droit de ne pas faire l’objet d’une décision individuelle
            automatisée (y compris le profilage) ou encore d’un droit de définir
            des directives relatives au sort des données personnelles après la
            mort. Les utilisateurs disposent également du droit de s’opposer au
            traitement par Make.org de leurs données personnelles.
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            Les utilisateurs peuvent retirer leur consentement au traitement de
            leurs données personnelles par Make.org à tout moment, étant précisé
            que ce retrait ne portera pas atteinte à la licéité des traitements
            antérieurs fondés sur le consentement.
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            {
              'L’exercice par les utilisateurs des droits ci-dessus rappelés peut être fait par tout moyen, et notamment par l’envoi d’un courriel à l’adresse : '
            }
            <RedLinkHTMLElementStyle as="a" href={`mailto:${CONTACT_EMAIL}`}>
              {`${CONTACT_EMAIL}.`}
            </RedLinkHTMLElementStyle>
            {
              ' Si les utilisateurs estiment que leurs droits sur les données ne sont pas respectés par Make.org, ils peuvent en tout état de cause adresser une réclamation à la '
            }
            <abbr title="Commission Nationale de l'Informatique et des Libertés">
              CNIL
            </abbr>
            {'( '}
            <RedLinkHTMLElementStyle
              href="https://www.cnil.fr/fr/plaintes/"
              target="blank"
              rel="noreferrer noopener"
            >
              https://www.cnil.fr/fr/plaintes/
              <NewWindowIconStyle
                aria-label={i18n.t('common.open_new_window')}
              />
            </RedLinkHTMLElementStyle>
            {' ).'}
          </StaticParagraphStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticThirdLevelTitleStyle>
            SÉCURITÉ ET CONFIDENTIALITÉ DU TRAITEMENT
          </StaticThirdLevelTitleStyle>
          <StaticParagraphStyle>
            Make.org prendra toute mesure nécessaire pour préserver et faire
            respecter l’intégrité et la confidentialité des données
            personnelles.
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            Make.org s’engage notamment à mettre en place les mesures techniques
            et organisationnelles permettant d’assurer, compte tenu de l’état
            des règles de l’art, un niveau de sécurité et de confidentialité
            approprié au regard des risques présentés par le traitement et la
            nature des données personnelles traitées.
          </StaticParagraphStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticThirdLevelTitleStyle>
            SORT DES DONNÉES
          </StaticThirdLevelTitleStyle>
          <StaticParagraphStyle>
            Les données sont conservées le temps nécessaire pour la mise en
            œuvre de la consultation et Make.org s’engage à supprimer
            l’intégralité des données personnelles au terme de sa mission auprès
            du commanditaire de la consultation. A l’issue de ladite mission,
            les résultats de celle-ci seront agrégés par Make.org dans un
            document, sur quel que support que ce soit, qui sera remis au
            commanditaire et qui ne comprendra aucune information de nature à
            permettre l’identification des utilisateurs.
          </StaticParagraphStyle>
        </StaticPrimaryUnorderedListItemStyle>
        <StaticPrimaryUnorderedListItemStyle>
          <StaticThirdLevelTitleStyle>
            DÉLÉGUÉ À LA PROTECTION DES DONNÉES
          </StaticThirdLevelTitleStyle>
          <StaticParagraphStyle>
            {
              'Le délégué à la protection des données désigné en application de l’article 37 du règlement européen sur la protection des données est la '
            }
            <abbr title="Société d'Exercice Libéral à Responsabilité Limitée">
              SELARL
            </abbr>
            {
              ' FWPA Avocats, 18 rue des Pyramides, 75001, Paris, représentée par Maître Jean-Baptiste Soufron.'
            }
          </StaticParagraphStyle>
          <StaticParagraphStyle>
            Il peut être contacté à l’adresse :&nbsp;
            <RedLinkHTMLElementStyle href={`mailto:${CONTACT_EMAIL}`}>
              {`${CONTACT_EMAIL}.`}
            </RedLinkHTMLElementStyle>
          </StaticParagraphStyle>
        </StaticPrimaryUnorderedListItemStyle>
      </StaticPrimaryUnorderedListStyle>
    </StaticPageWrapperStyle>
  </>
);

// default export needed for loadable component
export default DataFR; // eslint-disable-line import/no-default-export
