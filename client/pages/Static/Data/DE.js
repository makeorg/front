// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { MetaTags } from 'Client/app/MetaTags';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  CONTACT_EMAIL_DE,
  PRIVACY_POLICY_DATE,
  MAKE_ADDRESS,
  MAKE_RCS,
} from 'Shared/constants/config';
import { DateHelper } from 'Shared/helpers/date';
import { useSelector } from 'react-redux';
import { getCountryDPA } from 'Shared/helpers/countries';
import { type StateRoot } from 'Shared/store/types';
import { DATE_CAPITALIZE_LL_FORMAT } from 'Shared/constants/date';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticTitleExtra,
  StaticParagraphStyle,
  StaticPrimaryOrderedListStyle,
  StaticPrimaryOrderedListItemStyle,
  StaticThirdLevelTitleStyle,
  StaticSquareListStyle,
  StaticSquareListItemStyle,
  StaticExternalLinkIconStyle,
  StaticFourthLevelTitleStyle,
  StaticListTitleStyle,
} from '../style';

export const DataDE = () => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);

  return (
    <>
      <MetaTags title="DATENSCHUTZERKLÄRUNG - Make.org" />
      <StaticPageWrapperStyle>
        <StaticSecondLevelTitleStyle>
          DATENSCHUTZERKLÄRUNG
          <StaticTitleExtra>
            - Stand:{' '}
            {DateHelper.localizedAndFormattedDate(
              PRIVACY_POLICY_DATE,
              DATE_CAPITALIZE_LL_FORMAT
            )}{' '}
            -
          </StaticTitleExtra>
        </StaticSecondLevelTitleStyle>
        <StaticParagraphStyle>
          Dieses Dokument ergänzt die Nutzungsbedingungen von MAKE.ORG und nennt
          die Verpflichtungen von Make.org, einer vereinfachten
          Aktiengesellschaft frz. Rechts{' '}
          <span lang="fr">(Société par Actions Simplifiées)</span>, mit Sitz in{' '}
          {MAKE_ADDRESS} eingetragen im Handels- und Gesellschaftsregister von
          PARIS unter der Nummer {MAKE_RCS}, als Verantwortlicher für die
          Verarbeitung personenbezogener Daten im Hinblick auf die Einhaltung
          der geltenden Vorschriften für die Verarbeitung personenbezogener
          Daten, insbesondere der Verordnung (
          <abbr title="Europäische Union">UE</abbr>) 2016/679 des Europäischen
          Parlaments und des Rates vom 27. April 2016, die ab dem 25. Mai 2018
          gilt (nachfolgend &rdquo;die DSGVO&rdquo;).
        </StaticParagraphStyle>
        <StaticPrimaryOrderedListStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              VERARBEITUNG PERSONENBEZOGENER DATEN
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org nimmt den Schutz von personenbezogenen Daten im
              Allgemeinen und insbesondere den der Nutzer seiner Website und
              seiner Online-Konsultationen sehr ernst. Für Make.org ist dieser
              Schutz ein grundlegender Wert der digitalen Technologie und eine
              wesentliche Voraussetzung für Gewissensfreiheit. Zu diesem Zweck
              verpflichtet sich Make.org, den Umfang der gesammelten
              persönlichen Daten auf das zu beschränken, was für den Betrieb
              seiner Website und seiner Online-Konsultationen und anderen
              Aktionen notwendig ist.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Folglich darf Make.org personenbezogene Daten nur in der strikten
              Ausübung seiner Mission und für die folgenden Zwecke verarbeiten:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                Nutzung und Verbesserung der Website und Dienste von Make.org
                und
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Durchführung von Make.org-Konsultationen und anderen Aktionen.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              durch Make.org ist die Zustimmung der Nutzer der Website und der
              Konsultationen und anderer Online-Dienste.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Make.org ermöglicht es den Nutzern, Vorschläge für die
              Konsultation einzureichen (Option 1) und/oder auf Vorschläge zu
              reagieren und abzustimmen, die von anderen Nutzern für die
              Konsultation eingereicht wurden (Option 2). Die von Make.org
              verarbeiteten persönlichen Daten hängen von diesen beiden Optionen
              ab:
            </StaticParagraphStyle>
            <StaticFourthLevelTitleStyle>
              Option Nr.1
            </StaticFourthLevelTitleStyle>
            <StaticListTitleStyle>Personalien</StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>Vornamen</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Geburtsdatum
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Beruf (optional für einige Konsultationen)
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Postleitzahl (optional für einige Konsultationen)
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticListTitleStyle>Verbindungsdaten</StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>IP-Adresse</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>Facebook-ID</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>Google-ID</StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticListTitleStyle>
              Gegebenenfalls, wenn der Nutzer ein persönliches Konto bei
              Make.org eröffnet
            </StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                E-Mail Adresse
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>Passwort</StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticListTitleStyle>
              Teilnahme an der Konsultation
            </StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                Zur Konsultation vorgelegte Vorschläge
                <StaticParagraphStyle>
                  Gegebenenfalls Reaktionen auf Vorschläge, die zur Konsultation
                  vorgelegt wurden
                </StaticParagraphStyle>
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticFourthLevelTitleStyle>
              Option Nr.2
            </StaticFourthLevelTitleStyle>
            <StaticListTitleStyle>Personalien</StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>Vornamen</StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticListTitleStyle>Verbindung</StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>IP-Adresse</StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticListTitleStyle>
              Teilnahme an der Konsultation
            </StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                Reaktionen auf die zur Konsultation vorgelegten Vorschläge
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Mit Ausnahme der als optional gekennzeichneten personenbezogenen
              Daten verhindert die Verweigerung der Angabe der oben genannten
              Daten, dass der Nutzer Vorschläge zur Konsultation einreichen
              (Option Nr. 1) und/oder auf die zur Konsultation eingereichten
              Vorschläge reagieren kann (Option Nr. 2).
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              VERPFLICHTUNGEN VON MAKE.ORG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org ist dazu verpflichtet:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                personenbezogene Daten nur zu den unten genannten Zwecken zu
                verarbeiten;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                die Vertraulichkeit personenbezogener Daten zu gewährleisten,
                insbesondere indem sichergestellt wird, dass Dritte, die zur
                Verarbeitung personenbezogener Daten befugt sind, sich
                verpflichten, die Vertraulichkeit zu wahren bzw. einer
                angemessenen gesetzlichen Verpflichtung zur Vertraulichkeit zu
                unterliegen;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                in Bezug auf seine Tools, Konsultationen, Anwendungen oder
                Dienste den Datenschutz schon bei Design und Technikgestaltung
                (Privacy By Design) zu berücksichtigen.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>EMPFÄNGER</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Die personenbezogenen Daten, die bei der Ausführung des Auftrags
              verarbeitet werden, dürfen außer in den im Folgenden vorgesehenen
              Fällen oder sofern durch gesetzliche oder behördliche Bestimmungen
              gefordert nicht an Dritte weitergegeben werden.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Dementsprechend können folgende Personen zum alleinigen Zweck der
              Durchführung ihrer jeweiligen Aufgaben Zugang zu personenbezogenen
              Daten haben:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                Personen, die für die Durchführung der Konsultationen
                verantwortlich sind, die Verantwortlichen für den Kontakt mit
                Nutzern und die Bearbeitung von Beschwerden, die
                Verantwortlichen für Logistik- und IT-Dienste sowie deren
                Vorgesetzte;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                alle Unterauftragnehmer von Make.org – hierbei sei angemerkt,
                dass der zwischen den genannten Unterauftragnehmern und Make.org
                unterzeichnete Vertrag die Verpflichtungen der
                Unterauftragnehmer in Bezug auf den Schutz der Sicherheit und
                Vertraulichkeit der Daten enthält;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                gegebenenfalls die Partner oder Sponsoren der Konsultationen,
                insbesondere zum Zwecke der Begleitung und Förderung der
                Konsultationen, vor allem im Hinblick auf die Veröffentlichung.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Die Daten zur Teilnahme an der Konsultation werden anonymisiert
              Open Source veröffentlicht, ausgenommen davon sind die
              Informationen zur Identität der Nutzer und die Verbindungsdaten.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>COOKIES</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Wenn der Nutzer unsere Seite aufruft, werden auf seinem Endgerät
              Cookies hinterlegt, um seine Nutzererfahrung zu verbessern, die
              Leistung unserer Seite zu erhöhen und unsere Bürgerkonsultationen
              zu optimieren.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die in den Cookies enthaltenen Informationen sind nicht dazu
              bestimmt, den Nutzer persönlich zu identifizieren und werden
              niemals für andere als die unten angegebenen Zwecke verwendet.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              AUSÜBUNG VON BENUTZERRECHTEN
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Die Nutzer haben das Recht auf Zugang zu ihren personenbezogenen
              Daten, das Recht auf Berichtigung, auf Löschung, auf Einschränkung
              der Verarbeitung, auf Übertragbarkeit ihrer personenbezogenen
              Daten, das Recht, nicht einer ausschließlich auf einer
              automatisierten Verarbeitung (einschließlich Profiling) beruhenden
              Entscheidung unterworfen zu werden sowie das Recht festzulegen,
              was mit personenbezogener Daten nach ihrem Tod geschehen soll.
              Nutzer haben auch das Recht, der Verarbeitung ihrer
              personenbezogenen Daten durch Make.org zu widersprechen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die Nutzer können ihre Zustimmung zur Verarbeitung ihrer
              personenbezogenen Daten durch Make.org jederzeit widerrufen,
              vorausgesetzt, dass ein solcher Widerruf die Rechtmäßigkeit einer
              früheren, auf der Zustimmung beruhenden Verarbeitung nicht
              berührt.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die Nutzer können ihre Rechte wie oben beschrieben auf jede Art
              und Weise ausüben, einschließlich durch Senden einer E-Mail an{' '}
              <RedLinkHTMLElementStyle
                as="a"
                href={`mailto:${CONTACT_EMAIL_DE}`}
              >
                {`${CONTACT_EMAIL_DE}`}
              </RedLinkHTMLElementStyle>
              . Wenn die Nutzer der Ansicht sind, dass ihre Rechte an ihren
              Daten von Make.org nicht respektiert werden, können sie in jedem
              Fall eine Beschwerde beim{' '}
              <RedLinkHTMLElementStyle
                as="a"
                href={`${getCountryDPA(country).link}`}
                target="_blank"
                rel="noopener"
              >
                {getCountryDPA(country).name}
                <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                <ScreenReaderItemStyle>
                  Openingin a new window
                </ScreenReaderItemStyle>
              </RedLinkHTMLElementStyle>{' '}
              einreichen.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              SICHERHEIT UND VERTRAULICHKEIT DER VERARBEITUNG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org wird alle notwendigen Schritte unternehmen, um die
              Integrität und Vertraulichkeit der personenbezogenen Daten zu
              wahren und durchzusetzen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Insbesondere verpflichtet sich Make.org, technische und
              organisatorische Maßnahmen zu ergreifen, um unter Berücksichtigung
              des Standes der Technik ein Sicherheits- und
              Vertraulichkeitsniveau zu gewährleisten, das den mit der
              Verarbeitung verbundenen Risiken und der Art der verarbeiteten
              personenbezogenen Daten angemessen ist.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              DATENAUFBEWAHRUNG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Personenbezogene Daten werden für einen Zeitraum von drei Jahren
              nach dem letzten Besuch der Website oder nach der letzten
              Verbindung mit dem Konto aufbewahrt.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              DATENSCHUTZBEAUFTRAGTER
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Der gemäß Artikel 37 der DSGVO bestellte Datenschutzbeauftragte
              ist die Gesellschaft{' '}
              <span lang="fr">
                SELARL FWPA Avocats, 18 rue des Pyramides, 75001, Paris
              </span>
              , vertreten durch den Rechtsanwalt{' '}
              <span lang="fr">Maître Jean-Baptiste Soufron</span>. Er kann unter
              folgender Adresse kontaktiert werden:{' '}
              <RedLinkHTMLElementStyle href={`mailto:${CONTACT_EMAIL_DE}`}>
                {`${CONTACT_EMAIL_DE}`}
              </RedLinkHTMLElementStyle>
              .
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
        </StaticPrimaryOrderedListStyle>
      </StaticPageWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default DataDE; // eslint-disable-line import/no-default-export
