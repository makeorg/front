// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ACCESSIBILITY_EMAIL, MAKE_ADDRESS } from 'Shared/constants/config';
import { MetaTags } from 'Client/app/MetaTags';
import { env } from 'Shared/env';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticParagraphStyle,
  StaticPrimaryOrderedListStyle,
  StaticThirdLevelTitleStyle,
  StaticSquareListItemStyle,
  StaticSquareListStyle,
  StaticStrongStyle,
  StaticExternalLinkIconStyle,
} from '../style';

export const A11yDE = () => (
  <>
    <MetaTags
      title={i18n.t('meta.a11y.title')}
      description={i18n.t('meta.a11y.description')}
    />
    <StaticPageWrapperStyle>
      <StaticSecondLevelTitleStyle>
        ERKLÄRUNG ZUR BARRIEREFREIHEIT
      </StaticSecondLevelTitleStyle>
      <StaticParagraphStyle>
        Make.org verpflichtet sich, seine Website gemäß der{' '}
        <RedLinkHTMLElementStyle href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016L2102">
          {' '}
          Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates
        </RedLinkHTMLElementStyle>{' '}
        barrierefrei zu gestalten.
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        Diese Erklärung zur Barrierefreiheit bezieht sich auf{' '}
        <RedLinkHTMLElementStyle href={env.frontUrl()}>
          {env.frontUrl()}
        </RedLinkHTMLElementStyle>
        .
      </StaticParagraphStyle>
      <StaticParagraphStyle>
        <StaticStrongStyle>Identität des Registranten: </StaticStrongStyle>
        <br /> Make.org <br /> {MAKE_ADDRESS} <br />
        Kontakt:{' '}
        <RedLinkHTMLElementStyle href={ACCESSIBILITY_EMAIL}>
          {ACCESSIBILITY_EMAIL}
        </RedLinkHTMLElementStyle>
      </StaticParagraphStyle>
      <StaticPrimaryOrderedListStyle>
        <StaticThirdLevelTitleStyle>
          KONFORMITÄTSSTATUS
        </StaticThirdLevelTitleStyle>
        <StaticParagraphStyle>
          Make.org entspricht teilweise den{' '}
          <RedLinkHTMLElementStyle
            href="https://www.w3.org/TR/WCAG21/"
            target="_blank"
            rel="noopener"
          >
            <abbr
              lang="fr"
              title="Web Content Accessibility Guidelines - Version 2.1"
            >
              WCAG 2.1
            </abbr>
            <StaticExternalLinkIconStyle aria-hidden focusable="false" />
            <ScreenReaderItemStyle>
              {i18n.t('common.open_new_window')}
            </ScreenReaderItemStyle>
          </RedLinkHTMLElementStyle>
          .
        </StaticParagraphStyle>
        <StaticThirdLevelTitleStyle>TESTERGEBNISSE</StaticThirdLevelTitleStyle>
        <StaticParagraphStyle>
          Ein Audit der Website offenbart, dass diese die Konformitätsstufen A
          und AA erreicht und somit eine teilweise Konformität mit den WCAG
          2.1-Richtlinien aufweist.
        </StaticParagraphStyle>
        <StaticThirdLevelTitleStyle>
          ERSTELLUNG DER ERKLÄRUNG ZUR BARRIEREFREIHEIT
        </StaticThirdLevelTitleStyle>
        <StaticParagraphStyle>
          Diese Erklärung wurde am 4. November 2020 erstellt und am 28. Juli
          2021 aktualisiert.
        </StaticParagraphStyle>
        <StaticParagraphStyle>
          Technologien, die zur Erstellung der Make.org-Website verwendet
          wurden:
        </StaticParagraphStyle>
        <StaticSquareListStyle>
          <StaticSquareListItemStyle>HTML5</StaticSquareListItemStyle>
          <StaticSquareListItemStyle>CSS</StaticSquareListItemStyle>
          <StaticSquareListItemStyle>JavaScript </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            React JS Version 16
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Hier finden Sie die{' '}
            <RedLinkHTMLElementStyle href="https://gitlab.com/makeorg/platform/front/-/blob/production/package.json">
              vollständige Liste der verwendeten Technologien
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
        </StaticSquareListStyle>
        <StaticParagraphStyle>
          Zur Überprüfung der Barrierefreiheit verwendete Nutzeragenten,
          unterstützende Technologien und Tools:
        </StaticParagraphStyle>
        <StaticSquareListStyle>
          <StaticSquareListItemStyle>
            Chrome 86 / Mac OS 10.15 VoiceOver
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Firefox 82.0 / Linux Orca 3.36.2
          </StaticSquareListItemStyle>
        </StaticSquareListStyle>
        <StaticParagraphStyle>
          Für die Auswertung wurden folgende Tools verwendet:
        </StaticParagraphStyle>
        <StaticSquareListStyle>
          <StaticSquareListItemStyle>
            Google Lighthouse{' '}
            <RedLinkHTMLElementStyle href="https://developers.google.com/web/tools/lighthouse#devtools">
              DevTools
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Google Lighthouse{' '}
            <RedLinkHTMLElementStyle href="https://github.com/GoogleChrome/lighthouse-ci">
              CI
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Web Developer{' '}
            <RedLinkHTMLElementStyle href="https://chrispederick.com/work/web-developer/">
              Browser-Plug-in
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Axe{' '}
            <RedLinkHTMLElementStyle href="https://www.deque.com/axe/browser-extensions/">
              Browser-Plug-in
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            WCAG Color contrast checker{' '}
            <RedLinkHTMLElementStyle href="https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf">
              Browser-Plug-in
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
        </StaticSquareListStyle>
        <StaticParagraphStyle>
          Folgende Seiten der Website wurden auf ihre Barrierefreiheit geprüft:
        </StaticParagraphStyle>
        <StaticSquareListStyle>
          <StaticSquareListItemStyle>
            Startseite Frankreich:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR">
              https://make.org/FR
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Startseite Großbritannien:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/GB">
              https://make.org/GB
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite „Alle Konsultationen durchsuchen“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/browse/consultations/page/1 ">
              https://make.org/FR/browse/consultations/page/1
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite „Ergebnisse der Konsultationen“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/browse/results/page/1 ">
              https://make.org/FR/browse/results/page/1
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Konsultationsseite:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/consultation/dynamicslug/participate">
              https://make.org/FR/consultation/dynamicslug/participate
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit der Abstimmungssequenz der Vorschläge:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/consultation/dynamicslug/selection ">
              https://make.org/FR/consultation/dynamicslug/selection
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Ergebnissen einer Konsultation{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/consultation/dynamicslug/results">
              https://make.org/FR/consultation/dynamicslug/results
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den beliebtesten Ideen einer Konsultation{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/consultation/dynamicslug/top-ideas ">
              https://make.org/FR/consultation/dynamicslug/top-ideas
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Details einer beliebten Idee einer Konsultation:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/consultation/dynamicslug/top-ideas/ideaId  ">
              https://make.org/FR/consultation/dynamicslug/top-ideas/ideaId
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Vorschlägen:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/consultation/dynamicslug/proposal/proposalSlug/proposalId">
              https://make.org/FR/consultation/dynamicslug/proposal/proposalSlug/proposalId
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite zum Zurücksetzen des Passworts:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/password-recovery/userId/resetToken">
              https://make.org/FR/password-recovery/userId/resetToken
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite „Benutzerprofil“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile ">
              https://make.org/FR/profile
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite zum Bearbeiten des Benutzerprofils:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile/edit ">
              https://make.org/FR/profile/edit
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit der Liste der Vorschläge des Nutzers:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile/proposals ">
              https://make.org/FR/profile/proposals
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit der Liste der Lieblingsvorschläge des Nutzers:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile/favourites ">
              https://make.org/FR/profile/favourites
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit der Meinung einer bekannten Persönlichkeit:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile/opinions">
              https://make.org/FR/profile/opinions
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit dem öffentlichen Profil einer bekannten Persönlichkeit:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile/personality/userId">
              https://make.org/FR/profile/personality/userId
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Vorschlägen auf dem öffentlichen Profil einer
            Organisation:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile/organisation/userId/proposals">
              https://make.org/FR/profile/organisation/userId/proposals
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite zur Abstimmung auf dem öffentlichen Profil einer Organisation:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/profile/organisation/userId/votes">
              https://make.org/FR/profile/organisation/userId/votes
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Suchergebnissen:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/search?query=accessibilité">
              https://make.org/FR/search?query=accessibilité
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Ergebnissen der Suche nach Vorschlägen:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/search/proposals?query=accessibilit%C3%A9">
              https://make.org/FR/search/proposals?query=accessibilité
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Ergebnissen der Suche nach Organisationen:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/search/organisations?query=association">
              https://make.org/FR/search/organisations?query=association
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite mit den Ergebnissen der Suche nach Konsultationen:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/search/consultations?query=commen">
              https://make.org/FR/search/consultations?query=commen
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite „Impressum“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/mentions-legales">
              https://make.org/FR/mentions-legales
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite „Nutzungsbedingungen“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/conditions-dutilisation">
              https://make.org/FR/conditions-dutilisation
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite Seite „Datenschutzerklärung“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/politique-donnees">
              https://make.org/FR/politique-donnees
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite „Erklärung zur Barrierefreiheit“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/declaration-accessibilite">
              https://make.org/FR/declaration-accessibilite
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Seite „Kontakt“:{' '}
            <RedLinkHTMLElementStyle href="https://make.org/FR/contact">
              https://make.org/FR/contact
            </RedLinkHTMLElementStyle>
          </StaticSquareListItemStyle>
        </StaticSquareListStyle>
        <StaticParagraphStyle>
          Da der Länderindikator eine Variable in der Seitenstruktur ist, können
          wir bestätigen, dass alle Seiten, deren URLs einer der geprüften
          Strukturen folgen, die gleichen Prüfergebnisse aufweisen und dass der
          Grad der Barrierefreiheit in allen Ländern, in denen Make.org
          verfügbar ist, der gleiche ist.
        </StaticParagraphStyle>
        <StaticThirdLevelTitleStyle>
          NICHT BARRIEREFREIHEITE INHALTE
        </StaticThirdLevelTitleStyle>
        <StaticSquareListStyle>
          <StaticSquareListItemStyle>
            Informationstragende Canvas-Elemente („Canvas“-Tags) lassen sich
            nicht ersetzen oder können nicht durch formatierten Text ersetzt
            werden;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Rahmen-Elemente („iframe“-Tags) der Vermittlungsdienste von Google
            und Facebook beinhalten kein Attribut „title“;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Manche Skript-Elemente („Skript“-Tags) sind mit den unterstützenden
            Technologien nicht kompatibel und bieten keine sinnvolle
            Alternative;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Es kann unvermittelt zu einem Kontextwechsel kommen (Abmelden,
            Benachrichtigungen, Weiterleitung usw.);
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Manche Abkürzungen werden nicht erklärt;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Bei bestimmten Elementen kann der „Fokus“ unscharf werden;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Manche ausgeblendeten Elemente können von Sprachsynthesizern
            mitgesprochen werden;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Steuerung von Elementen wie „Tooltip“ oder „Sliders“;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Manche Felder in Formularen müssen gesondert bestätigt werden, ohne
            dass dies ausdrücklich vorab erklärt wird;
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Es fehlt eine Übersicht über die Website (Sitemap);
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Auf Seiten ohne Ankerlink kann die Rückkehr nach oben die
            Reihenfolge der Tastaturbefehle durcheinanderbringen.
          </StaticSquareListItemStyle>
          <StaticSquareListItemStyle>
            Einige länderspezifische Bilder (visueller Inhalt, Alternative)
          </StaticSquareListItemStyle>
        </StaticSquareListStyle>
        <StaticThirdLevelTitleStyle>
          FEEDBACK UND KONTAKT
        </StaticThirdLevelTitleStyle>
        <StaticParagraphStyle>
          Sollten Sie auf einen Inhalt oder eine Funktion nicht zugreifen
          können, wenden Sie sich bitte an den Betreiber der Website. Er zeigt
          Ihnen eine barrierefreie Alternative auf oder lässt Ihnen den Inhalt
          in einer anderen Form zukommen.
        </StaticParagraphStyle>
        <StaticParagraphStyle>
          Sie erreichen uns unter dieser E-Mail-Adresse:{' '}
          <RedLinkHTMLElementStyle href={ACCESSIBILITY_EMAIL}>
            {ACCESSIBILITY_EMAIL}
          </RedLinkHTMLElementStyle>
        </StaticParagraphStyle>
      </StaticPrimaryOrderedListStyle>
    </StaticPageWrapperStyle>
  </>
);

// default export needed for loadable component
export default A11yDE; // eslint-disable-line import/no-default-export
