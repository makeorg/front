// @flow
import React from 'react';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { MetaTags } from 'Client/app/MetaTags';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { CONTACT_EMAIL_DE, PRIVACY_POLICY_DATE } from 'Shared/constants/config';
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
  StaticPrimaryUnorderedListStyle,
  StaticPrimaryUnorderedListItemStyle,
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
      <MetaTags title="Persönliche Datencharta - Make.org" />
      <StaticPageWrapperStyle>
        <StaticSecondLevelTitleStyle>
          PERSÖNLICHE DATENCHARTA
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
          Dieses Dokument ergänzt die Allgemeinen Geschäftsbedingungen von
          MAKE.ORG und stellt die Verpflichtungen von Make.org,{' '}
          <span lang="fr">Société par Actions Simplifiées</span>, mit Sitz in 4
          rue René Villermé, 75011 Paris, eingetragen im Handels- und
          Gesellschaftsregister PARIS unter der Nummer 820 016 095, als
          Verantwortlicher für die Verarbeitung personenbezogener Daten im
          Hinblick auf die Einhaltung der geltenden Vorschriften für die
          Verarbeitung personenbezogener Daten, insbesondere der Verordnung (
          <abbr title="Europäische Union">UE</abbr>) 2016/679 des Europäischen
          Parlaments und des Rates vom 27. April 2016, die ab dem 25. Mai 2018
          gilt (nachfolgend &rdquo;die DSGVO&rdquo;).
        </StaticParagraphStyle>
        <StaticPrimaryUnorderedListStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              BEHANDLUNGSBESCHREIBUNG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org ist besorgt über den Schutz von persönlichen Daten im
              Allgemeinen und den der Nutzer seiner Website und seiner
              Online-Konsultationen im Besonderen. Für Make.org ist dies einer
              der Grundwerte der digitalen Technologie und eine wesentliche
              Voraussetzung für die Gewissensfreiheit. Zu diesem Zweck
              verpflichtet sich Make.org, die Menge der gesammelten persönlichen
              Daten auf das zu beschränken, was für den Betrieb seiner Website
              und seiner Online-Konsultationen und anderen Operationen notwendig
              ist.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Folglich darf Make.org personenbezogene Daten nur in der strikten
              Ausübung seiner Mission und für die folgenden Zwecke verarbeiten:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                Nutzung und Verbesserung der Make.org-Website und -Dienste; und
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Durchführung von Make.org-Beratungen und anderen Vorgängen.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              durch Make.org ist die Zustimmung der Nutzer der Website und ihrer
              Konsultationen und anderer Online-Operationen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Make.org ermöglicht es den Benutzern, Vorschläge für die
              Konsultation einzureichen (Option 1) und/oder auf Vorschläge zu
              reagieren und abzustimmen, die von anderen Benutzern für die
              Konsultation eingereicht wurden (Option 2). Die persönlichen
              Daten, die von Make.org verarbeitet werden, variieren zwischen
              diesen beiden Optionen:
            </StaticParagraphStyle>
            <StaticFourthLevelTitleStyle>
              Option Nr.1
            </StaticFourthLevelTitleStyle>
            <StaticListTitleStyle>Identität</StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>Vornamen</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Geburtsdatum
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Professionell (optional für einige Konsultationen)
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                Postleitzahl (optional für einige Konsultationen)
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticListTitleStyle>Verbindung</StaticListTitleStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>IP-Adresse</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>Facebook-ID</StaticSquareListItemStyle>
              <StaticSquareListItemStyle>Google-ID</StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticListTitleStyle>
              Und/oder, wenn Sie ein personalisiertes Konto bei Make.org
              eröffnen
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
            <StaticListTitleStyle>Identität</StaticListTitleStyle>
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
              Mit Ausnahme der als fakultativ gekennzeichneten Kategorien
              personenbezogener Daten verhindert die Verweigerung der Angabe der
              oben genannten Daten, dass der Nutzer Vorschläge zur Konsultation
              einreichen (Option Nr. 1) und/oder auf die zur Konsultation
              eingereichten Vorschläge reagieren kann (Option Nr. 2).
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              VERPFLICHTUNGEN VON MAKE.ORG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org ist dazu verpflichtet:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                personenbezogene Daten nur zu den unten genannten Zwecken
                verarbeiten;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                die Vertraulichkeit personenbezogener Daten zu gewährleisten,
                insbesondere indem sichergestellt wird, dass Dritte, die zur
                Verarbeitung personenbezogener Daten befugt sind, sich
                verpflichten, die Vertraulichkeit zu wahren oder einer
                angemessenen gesetzlichen Verpflichtung zur Vertraulichkeit
                unterliegen;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                in Bezug auf seine Tools, Beratungen, Anwendungen oder Dienste
                die Grundsätze des Datenschutzes durch Design und des
                Datenschutzes durch Voreinstellungen (Privacy By Design) zu
                berücksichtigen.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              POSTANSCHRIFTEN
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Die personenbezogenen Daten, die bei der Ausführung des Auftrags
              verarbeitet werden, dürfen nicht an Dritte weitergegeben werden,
              es sei denn, dies ist im Folgenden vorgesehen oder durch
              gesetzliche oder behördliche Bestimmungen geregelt.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              So können sie zum alleinigen Zweck der Durchführung ihrer
              jeweiligen Aufgaben Zugang zu personenbezogenen Daten haben:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                die Personen, die für die Durchführung der Beratung
                verantwortlich sind, die Verantwortlichen für den Umgang mit
                Anwendern und Beschwerden, die Verantwortlichen für Logistik-
                und IT-Dienste sowie deren Vorgesetzte;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                alle Unterauftragnehmer von Make.org - wobei festgelegt wird,
                dass der zwischen den genannten Unterauftragnehmern und Make.org
                unterzeichnete Vertrag die Verpflichtungen der
                Unterauftragnehmer in Bezug auf den Schutz der Sicherheit und
                Vertraulichkeit der Daten erwähnt;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                gegebenenfalls die Partner oder Sponsoren der Konsultationen,
                insbesondere zum Zwecke der Begleitung und Förderung der
                Konsultationen, vor allem im Hinblick auf die Veröffentlichung.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Schließlich stehen die Daten zur Teilnahme an der Konsultation
              anonymisiert in Open Source zur Verfügung - natürlich mit Ausnahme
              der Daten zur Identität der Nutzer und der Verbindungsdaten.
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>COOKIES</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Um dem Benutzer zu ermöglichen, sich nicht jedes Mal
              identifizieren zu müssen, wenn er auf den Dienst zugreift, außer
              beim ersten Mal, verwendet Make.org Sitzungs-Cookies. Diese auf
              dem Computer hinterlegten Dateien ermöglichen es, den Benutzer
              jedes Mal zu identifizieren, wenn er sich mit der Website
              verbindet. Darüber hinaus, um den Service zu verbessern, verwendet
              Make.org Cookies, um das Publikum zu messen, wie die Anzahl der
              aufgerufenen Seiten, die Anzahl der Besuche, die Aktivität der
              Besucher auf der Website und die Häufigkeit ihrer Rückkehr.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Diese Cookies ermöglichen es uns lediglich, das Funktionieren der
              Website und der Dienstleistungen zu verbessern sowie statistische
              Studien über den Verkehr der Besucher der Website zu erstellen,
              deren Ergebnisse völlig anonym sind.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Generell kann jeder Nutzer, wenn er dies wünscht, der Verwendung
              von Cookies widersprechen, indem er in seinem Browser die
              entsprechenden Einstellungen zur Deaktivierung von Cookies
              vornimmt (in der Hilfe des verwendeten Browsers ist die
              Vorgehensweise angegeben).
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              AUSÜBUNG VON BENUTZERRECHTEN
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Die Nutzer haben das Recht auf Zugang zu ihren personenbezogenen
              Daten, das Recht auf Berichtigung ihrer personenbezogenen Daten,
              das Recht auf Löschung ihrer personenbezogenen Daten, das Recht
              auf Einschränkung der Verarbeitung ihrer personenbezogenen Daten,
              das Recht auf Übertragbarkeit ihrer personenbezogenen Daten, das
              Recht, keiner automatisierten Einzelentscheidung (einschließlich
              Profiling) unterworfen zu werden oder das Recht, Richtlinien für
              das Schicksal personenbezogener Daten nach dem Tod zu definieren.
              Benutzer haben auch das Recht, der Verarbeitung ihrer persönlichen
              Daten durch Make.org zu widersprechen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die Nutzer können ihre Zustimmung zur Verarbeitung ihrer
              personenbezogenen Daten durch Make.org jederzeit widerrufen,
              vorausgesetzt, dass ein solcher Widerruf die Rechtmäßigkeit einer
              früheren, auf der Zustimmung beruhenden Verarbeitung nicht
              berührt.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Benutzer können ihre Rechte wie oben beschrieben auf jede Art und
              Weise ausüben, einschließlich durch Senden einer E-Mail an{' '}
              <RedLinkHTMLElementStyle
                as="a"
                href={`mailto:${CONTACT_EMAIL_DE}`}
              >
                {`${CONTACT_EMAIL_DE}`}
              </RedLinkHTMLElementStyle>
              . Wenn Nutzer das Gefühl haben, dass ihre Rechte an ihren Daten
              von Make.org nicht respektiert werden, können sie in jedem Fall
              eine Beschwerde bei der{' '}
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
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              SICHERHEIT UND VERTRAULICHKEIT DER VERARBEITUNG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org wird alle notwendigen Schritte unternehmen, um die
              Integrität und Vertraulichkeit der persönlichen Daten zu wahren
              und durchzusetzen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Insbesondere verpflichtet sich Make.org, technische und
              organisatorische Maßnahmen zu ergreifen, um unter Berücksichtigung
              des Standes der Technik ein Sicherheits- und
              Vertraulichkeitsniveau zu gewährleisten, das den mit der
              Verarbeitung verbundenen Risiken und der Art der verarbeiteten
              personenbezogenen Daten angemessen ist.
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>DATENFLUSS</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Personenbezogene Daten werden für einen Zeitraum von drei Jahren
              nach dem letzten Besuch der Website oder nach der letzten
              Verbindung mit dem Konto aufbewahrt.
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              DATENSCHUTZBEAUFTRAGTER
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Der gemäß Artikel 37 der DSGVO bestellte Datenschutzbeauftragte
              ist{' '}
              <span lang="fr">
                SELARL FWPA Avocats, 18 rue des Pyramides, 75001, Paris
              </span>
              , vertreten durch{' '}
              <span lang="fr">Maître Jean-Baptiste Soufron</span>. Er kann unter
              folgender Adresse kontaktiert werden:{' '}
              <RedLinkHTMLElementStyle href={`mailto:${CONTACT_EMAIL_DE}`}>
                {`${CONTACT_EMAIL_DE}`}
              </RedLinkHTMLElementStyle>
              .
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
        </StaticPrimaryUnorderedListStyle>
      </StaticPageWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default DataDE; // eslint-disable-line import/no-default-export
