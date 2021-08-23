// @flow
import React from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { getDataPageLink } from 'Shared/helpers/url';
import { MetaTags } from 'Client/app/MetaTags';
import {
  CONTACT_EMAIL_DE,
  GTU_DATE,
  MAKE_ADDRESS,
  MAKE_CAPITAL,
  MAKE_RCS,
} from 'Shared/constants/config';
import { DateHelper } from 'Shared/helpers/date';
import {
  DATE_CAPITALIZE_LL_FORMAT,
  DATE_CAPITALIZE_L_FORMAT,
} from 'Shared/constants/date';
import { i18n } from 'Shared/i18n';
import {
  StaticPageWrapperStyle,
  StaticSecondLevelTitleStyle,
  StaticTitleExtra,
  StaticParagraphStyle,
  StaticPrimaryOrderedListStyle,
  StaticPrimaryOrderedListItemStyle,
  StaticThirdLevelTitleStyle,
  StaticFourthLevelTitleStyle,
  StaticSquareListItemStyle,
  StaticSquareListStyle,
  StaticSecondaryOrderedListStyle,
  StaticSecondaryOrderedListItemStyle,
  StaticStrongStyle,
} from '../style';

export const TermsOfUseDE = () => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  return (
    <>
      <MetaTags
        title={i18n.t('meta.gtu.title')}
        description={i18n.t('meta.gtu.description')}
      />
      <StaticPageWrapperStyle>
        <StaticSecondLevelTitleStyle>
          <>MAKE.ORG NUTZUNGSBEDINGUNGEN</>
          <StaticTitleExtra>
            - Stand:{' '}
            {DateHelper.localizedAndFormattedDate(
              GTU_DATE,
              DATE_CAPITALIZE_LL_FORMAT
            )}{' '}
            -
          </StaticTitleExtra>
        </StaticSecondLevelTitleStyle>
        <StaticParagraphStyle>
          Make.org ist eine überparteiliche Organisation, die eine öffentlich
          zugängliche Website und Dienstleistungen anbietet.
        </StaticParagraphStyle>
        <StaticParagraphStyle>
          Zu diesem Zweck ermöglicht sie den Nutzern, Vorschläge auf der Website
          zu machen. Andere Nutzer, die dies wünschen, können diese Vorschläge
          dann kommentieren oder für sie abstimmen, um sie zu unterstützen. Ziel
          ist es, in der Gesellschaft die Auseinandersetzung mit Themen von
          allgemeinem Interesse, insbesondere zu wirtschaftlichen, sozialen,
          staatsbürgerlichen und bürgerlichen Angelegenheiten zu fördern. Diese
          Ideen können dann von Make.org-Partnern aufgegriffen werden, die
          helfen, sie konkret umzusetzen.
        </StaticParagraphStyle>
        <StaticPrimaryOrderedListStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              ZWECK DER AUF DIESER WEBSITE ANGEBOTENEN DIENSTE
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Der Zweck dieser allgemeinen Bedingungen ist es, die Bedingungen
              für die Nutzung der auf Make.org angebotenen Dienste (im
              Folgenden: die &rdquo;Dienste&rdquo;) sowie die Rechte und
              Pflichten der Parteien in diesem Zusammenhang zu definieren.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Sie sind jederzeit über einen direkten Link am unteren Rand der
              Startseite der Website zugänglich und ausdruckbar.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Sie können ggf. durch besondere Nutzungsbedingungen für bestimmte
              Dienste oder durch besondere Nutzungsbedingungen für bestimmte
              Nutzer ergänzt werden. Im Falle von Widersprüchen gehen die
              besonderen Bedingungen diesen allgemeinen Bedingungen vor.{' '}
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              BETREIBER DER WEBSITE UND DER DIENSTE
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Die Website und die Dienste (oder zusammen &rdquo;die
              Dienste&rdquo;) werden von Make.org, einer vereinfachten
              Aktiengesellschaft französischen Rechts, mit einem Grundkapital
              von {MAKE_CAPITAL}, mit Sitz in {MAKE_ADDRESS}, eingetragen im
              Handels- und Gesellschaftsregister von PARIS unter der Nummer{' '}
              {MAKE_RCS} (im Folgenden &rdquo;Make.org&rdquo;) betrieben.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              ZUGANG ZUR WEBSITE UND ZU DEN DIENSTEN
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Der Zugang zur Website und zu den Diensten ist kostenlos und den
              auf der Website angegebenen Personen vorbehalten:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                jeder natürlichen Person, die voll rechts- und geschäftsfähig
                ist, um sich an diese Bedingungen zu binden. Eine natürliche
                Person, die nicht voll rechts- und geschäftsfähig ist, darf nur
                mit Zustimmung ihres gesetzlichen Vertreters auf die Website und
                die Dienste zugreifen,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                jedem Minderjährigen mit der Genehmigung seiner gesetzlichen
                Vertreter und unter deren Kontrolle,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                jeder juristischen Person, die durch eine natürliche Person
                handelt, die die Rechtsfähigkeit besitzt, im Namen und im
                Auftrag der juristischen Person Verträge abzuschließen.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              ANNAHME DER ALLGEMEINEN NUTZUNGSBEDINGUNGEN
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Der Zweck dieser Allgemeinen Nutzungsbedingungen (im Folgenden
              &rdquo;AGB&rdquo;) ist es, die Bedingungen zu definieren, unter
              denen der Nutzer auf die Dienste zugreifen und diese nutzen kann.
              Sie stellen einen Vertrag zwischen Make.org und den Nutzern des
              Dienstes dar. Sie ersetzen alle früheren Bestimmungen und stellen
              die Gesamtheit der Rechte und Pflichten der Parteien dar. Die ANB
              werden jedem Nutzer mitgeteilt, der sie liest.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die Nutzung des Dienstes setzt die vollständige und
              uneingeschränkte Annahme dieser ANB voraus. Die Ablehnung der
              Nutzungsbedingungen bedeutet den Verzicht auf die Nutzung des
              Dienstes.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die Nutzung des Dienstes beinhaltet auch die vollständige und
              uneingeschränkte Akzeptanz der Make.org-Datenschutzerklärung, die
              einen integralen Bestandteil dieser ANB bildet und hier verfügbar{' '}
              <RedLinkHTMLElementStyle
                href={getDataPageLink(country, language)}
              >
                ist.
              </RedLinkHTMLElementStyle>
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Diese ANB können jederzeit und ohne Ankündigung von Make.org
              geändert werden. Jede Änderung wird unmittelbar mit der
              Veröffentlichung der neuen Version der ANB auf der Website
              wirksam. Der Nutzer wird daher aufgefordert, regelmäßig die
              neueste Version der ANB auf der Website zu konsultieren.
              Andernfalls gilt die neue Version der Allgemeinen
              Nutzungsbedingungen als vorbehaltlos angenommen.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              NUTZUNG DER WEBSITE
            </StaticThirdLevelTitleStyle>
            <StaticSecondaryOrderedListStyle>
              <StaticSecondaryOrderedListItemStyle className="section5">
                <StaticFourthLevelTitleStyle>
                  Zugang zur Website
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Die Seite ist öffentlich zugänglich und alle Nutzer können die
                  Seite besuchen und über die Vorschläge abstimmen.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section5">
                <StaticFourthLevelTitleStyle>
                  Registrierte Nutzer
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Alle Nutzer können auf der Seite abstimmen, aber nur
                  registrierte Nutzer können Vorschläge im Rahmen einer
                  Konsultation machen. Zu diesem Zweck können sich diejenigen,
                  die dies wünschen, auf der Website registrieren, indem sie das
                  zu diesem Zweck vorgesehene Formular ausfüllen. Sie müssen
                  dann alle als obligatorisch gekennzeichneten Angaben machen.
                  Eine unvollständige Anmeldung wird nicht berücksichtigt.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Die auf der Website registrierten Nutzer werden ausdrücklich
                  als &rdquo;registrierte Nutzer&rdquo; bezeichnet.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Registrierte Nutzer garantieren, dass alle im
                  Registrierungsformular gemachten Angaben korrekt, aktuell und
                  wahrheitsgemäß sind und nicht irreführend sind.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, diese Informationen in seinem
                  persönlichen Bereich zu aktualisieren, indem er Make.org per
                  E-Mail an{' '}
                  <RedLinkHTMLElementStyle href={`mailto:${CONTACT_EMAIL_DE}`}>
                    {`${CONTACT_EMAIL_DE}`}
                  </RedLinkHTMLElementStyle>{' '}
                  kontaktiert.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der registrierte Nutzer ist darüber informiert und akzeptiert,
                  dass die zum Zweck der Erstellung oder Aktualisierung seines
                  Kontos eingegebenen Informationen ein Beweis für seine
                  Identität sind. Die vom Nutzer eingegebenen Informationen sind
                  nach der Validierung verbindlich.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section5">
                <StaticFourthLevelTitleStyle>
                  Konto und persönlicher Bereich
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Die Registrierung führt automatisch zur Eröffnung eines Kontos
                  (im Folgenden: &rdquo;Konto&rdquo;), das Zugang zu einem
                  persönlichen Bereich (im Folgenden: der &rdquo;Persönliche
                  Bereich&rdquo;) gibt, der es ermöglicht, die Nutzung der
                  Dienste in einer Form und mit den technischen Mitteln zu
                  verwalten, die Make.org für geeignet hält und die sich im
                  Laufe der Zeit ändern können.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Registrierte Nutzer können jederzeit auf ihren persönlichen
                  Bereich zugreifen, nachdem sie sich mit ihrem Login und
                  Passwort identifiziert haben.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Registrierte Nutzer verpflichten sich, die Dienste nur für
                  ihre eigenen Zwecke zu nutzen und keinem Dritten zu gestatten,
                  sie an ihrer Stelle oder in ihrem Namen zu nutzen, es sei
                  denn, sie übernehmen die volle Verantwortung dafür.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Registrierte Nutzer sind ebenfalls für die Geheimhaltung ihres
                  Logins und Passworts verantwortlich. Sie sollten Make.org
                  sofort kontaktieren, wenn sie feststellen, dass ihr Konto ohne
                  ihr Wissen verwendet wurde. Sie erkennen an, dass Make.org das
                  Recht hat, in solchen Fällen entsprechende Maßnahmen zu
                  ergreifen.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
            </StaticSecondaryOrderedListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              BESCHREIBUNG DER DIENSTE
            </StaticThirdLevelTitleStyle>
            <StaticSecondaryOrderedListStyle>
              <StaticSecondaryOrderedListItemStyle className="section6">
                <StaticFourthLevelTitleStyle>
                  Vorschläge von Bürgern
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Die Plattform bietet Nutzern die Möglichkeit, über Vorschläge
                  von Bürgern (im Folgenden: der &rdquo;Bürgervorschlag&rdquo;)
                  abzustimmen, die von anderen Nutzern vorgeschlagen wurden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Die bei Make.org eingereichten Bürgervorschläge haben alle die
                  gleiche Chance, in die Tat umgesetzt zu werden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Durch ihr Votum können die Nutzer einen Vorschlag in eine
                  konkrete Maßnahme verwandeln, für die sich Make.org einsetzt.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Make.org versteht sich dann als Vermittler zwischen
                  Bürgervorschlägen und Aktionspartnern. (
                  <RedLinkHTMLElementStyle href="#anchor_partners">
                    Siehe 6.8 Aktionspartner
                  </RedLinkHTMLElementStyle>
                  )
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section6">
                <StaticFourthLevelTitleStyle>
                  Einen Vorschlag formulieren
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Registrierte Nutzer können eigene Bürgervorschläge machen, die
                  veröffentlicht, kommentiert, analysiert und diskutiert werden
                  sollen und zur Abstimmung durch die Nutzer gestellt werden.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section6">
                <StaticFourthLevelTitleStyle>
                  Form und Inhalt der Bürgervorschläge
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Jeder Bürgervorschlag muss unbedingt mit &rdquo;„Man
                  sollte“&rdquo; beginnen und darf maximal 140 Zeichen
                  enthalten. Der Vorschlag muss gut lesbar und in einer
                  allgemein verständlichen Form in deutscher Sprache verfasst
                  sein, ohne Abkürzungen und ohne übermäßige Verwendung von
                  Großbuchstaben.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Vorschlag darf keine Elemente enthalten, die gegen das
                  Gesetz oder die guten Sitten verstoßen oder dessen Inhalt
                  gegen die Bestimmungen dieser Nutzungsbedingungen verstößt.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section6">
                <StaticFourthLevelTitleStyle>
                  Moderieren und Veröffentlichung von Bürgervorschlägen
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Die Veröffentlichung des Vorschlags eines Nutzers unterliegt
                  dem Moderieren unter den in diesen ANB definierten
                  Bedingungen. Die Anfrage zur Veröffentlichung eines
                  Bürgervorschlags wird so schnell wie möglich von den
                  Make.org-Teams bearbeitet. Ziel ist eine Antwort in weniger
                  als 48 Stunden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Die für das Moderieren zuständige Abteilung von Make.org prüft
                  jeden eingegangenen Bürgervorschlag, bevor er online gestellt
                  wird. Der Nutzer muss daher sicherstellen, dass er einen
                  Vorschlag nicht unnötig mehrfach abschickt oder einen
                  Vorschlag mehrfach einreicht. Er sollte die Dienste auch nicht
                  spammen, indem er die gleichen Vorschläge von verschiedenen
                  E-Mail-Adressen versendet.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Sobald der Bürgervorschlag eines Nutzers validiert ist, wird
                  er veröffentlicht und eine Benachrichtigung über die
                  Veröffentlichung an den Autor gesendet.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Wird der Bürgervorschlag eines Nutzers abgelehnt, erhält der
                  Nutzer von Make.org eine E-Mail, die ihn über die Ablehnung
                  informiert. Der Nutzer kann dann nach eigenem Ermessen einen
                  neuen Vorschlag einreichen.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Sobald der Vorschlag veröffentlicht wurde, kann er auf der
                  Plattform erscheinen, aber Make.org garantiert weder für die
                  Häufigkeit des Erscheinens noch für das Publikum.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Make.org verpflichtet sich, den legalen Inhalt, der ihm
                  vorgeschlagen wird und der seinen Regeln für das Moderieren
                  entspricht, nicht willkürlich zu verändern, abgesehen von
                  Korrekturen, die die Rechtschreibung betreffen.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section6">
                <StaticFourthLevelTitleStyle>
                  Antrag auf Löschung eines Bürgervorschlags durch einen
                  registrierten Nutzer
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Für den Fall, dass ein registrierter Nutzer seinen
                  veröffentlichten Bürgervorschlag löschen lassen möchte, sollte
                  er eine Anfrage per E-Mail an Make.org an die folgende Adresse
                  senden:{' '}
                  <RedLinkHTMLElementStyle href={`mailto:${CONTACT_EMAIL_DE}`}>
                    {`${CONTACT_EMAIL_DE}`}
                  </RedLinkHTMLElementStyle>
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Antrag des Nutzers auf Löschung wird innerhalb eines
                  angemessenen Zeitrahmens von Make.org bearbeitet.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section6">
                <StaticFourthLevelTitleStyle>
                  Abstimmen über einen Bürgervorschlag
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Alle Nutzer können sich durch Abstimmungen über die
                  Bürgervorschläge auf der Website äußern, ohne ein Konto
                  erstellen zu müssen, indem sie auf die Schaltflächen
                  &rdquo;Ich stimme zu&rdquo;, &rdquo;Ich stimme nicht zu&rdquo;
                  oder &rdquo;Neutral&rdquo; klicken.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section6">
                <StaticFourthLevelTitleStyle>
                  Verwendung von Bürgervorschläge
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  <StaticStrongStyle>
                    Verwendung für statistische Zwecke:{' '}
                  </StaticStrongStyle>
                  Make.org kann die Bürgervorschläge, darunter
                  Zusammenstellungen bzw. Übersichten für statistische,
                  Forschungs- oder jedwede anderen Zwecke, gruppiert oder
                  einzeln und bereinigt von allen personenbezogene Daten
                  verwenden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  <StaticStrongStyle>
                    Verwendung für Debatten:{' '}
                  </StaticStrongStyle>
                  Die auf der Plattform veröffentlichten Bürgervorschläge können
                  von Make.org ausgewählt werden, um in öffentlichen Debatten,
                  die von Make.org oder seinen Partnern organisiert werden,
                  analysiert, kommentiert und/oder diskutiert zu werden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  <StaticStrongStyle>
                    Verwendung für Berichterstattung und Forschung:{' '}
                  </StaticStrongStyle>
                  Die auf der Plattform veröffentlichten Bürgervorschläge sowie
                  die dazu abgegebenen Stimmen können von Make.org ausgewählt
                  werden, um u.a. Analysen, Berichte und Studien für
                  statistische und Forschungszwecke durchzuführen oder um
                  Reformprojekte zu erarbeiten.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  <StaticStrongStyle>
                    Veröffentlichung von White Papers:{' '}
                  </StaticStrongStyle>
                  Make.org kann nicht-kommerzielle White Papers veröffentlichen
                  oder mitveröffentlichen, die ganz oder teilweise die
                  Bürgervorschläge enthalten.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  <StaticStrongStyle>Redaktionelle Nutzung: </StaticStrongStyle>
                  Die Bürgervorschläge und die damit verbundenen Abstimmungen
                  können auch von Make.org und/oder Partnerjournalisten
                  aufgegriffen, kommentiert und analysiert werden, um
                  redaktionelle Inhalte zu produzieren.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  <StaticStrongStyle>
                    Verwendung zu Kommunikationszwecken:{' '}
                  </StaticStrongStyle>
                  Bürgervorschläge können von Make.org auch auf seiner Website
                  verwendet und auf von Make.org-Partnern betriebenen
                  Werbeflächen angezeigt werden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Wurde der Vorschlag anonym gemacht, wird er auf der
                  Werbefläche ohne persönliche Angaben veröffentlicht; hat der
                  Nutzer Vorname, Alter und Region angegeben, werden diese auf
                  der Werbefläche erwähnt.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  <StaticStrongStyle>
                    Umsetzung von Bürgervorschlägen:{' '}
                  </StaticStrongStyle>
                  Schließlich können die Vorschläge Gegenstand einer konkreten
                  Umsetzungsmaßnahme sein, entweder direkt durch die Nutzer oder
                  durch die Aktionspartner von Make.org. Der Nutzer, von dem der
                  Vorschlag stammt, sowie die Nutzer, die über ihn abgestimmt
                  haben, verstehen und akzeptieren diesen Sachverhalt
                  ausdrücklich.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle
                id="anchor_partners"
                className="section6"
              >
                <StaticFourthLevelTitleStyle>
                  Aktionspartner
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Registrierte Nutzer können eigene Bürgervorschläge machen, die
                  veröffentlicht, kommentiert, analysiert und diskutiert werden
                  sollen und zur Abstimmung durch die Nutzer gestellt werden.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
            </StaticSecondaryOrderedListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>NACHWEISE</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Der Nutzer nimmt dies ausdrücklich zur Kenntnis und erklärt sich
              damit einverstanden:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                dass die Daten, die auf der Website und auf den IT-Geräten von
                Make.org gesammelt werden, ein Nachweis für die Realität der
                Handlungen sind, die im Rahmen des vorliegenden Dokuments
                vorgenommen werden;
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                dass diese Daten den einzigen zwischen den Parteien zugelassenen
                Nachweis darstellen.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              PFLICHTEN DES NUTZERS
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Unbeschadet der anderen hierin vorgesehenen Verpflichtungen
              verpflichtet sich der Nutzer zur Einhaltung der folgenden
              Bestimmungen:
            </StaticParagraphStyle>
            <StaticSecondaryOrderedListStyle>
              <StaticSecondaryOrderedListItemStyle className="section8">
                <StaticFourthLevelTitleStyle>
                  Einhaltung von Gesetzen und Vorschriften
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, bei der Nutzung der Plattform
                  die geltenden Gesetze und Vorschriften zu beachten und nicht
                  gegen die Rechte Dritter oder die öffentliche Ordnung zu
                  verstoßen. Der Nutzer ist allein verantwortlich für die
                  ordnungsgemäße Einhaltung aller administrativen, steuerlichen
                  und/oder sozialen Formalitäten sowie für die Zahlung von
                  Beiträgen, Steuern oder Abgaben jeglicher Art, die im
                  Zusammenhang mit seiner Nutzung der Plattform anfallen können.
                  Make.org kann in dieser Hinsicht in keiner Weise haftbar
                  gemacht werden.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section8">
                <StaticFourthLevelTitleStyle>
                  Nutzung der Website und Dienste
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Der Nutzer erkennt an, dass er die Eigenschaften und
                  Beschränkungen aller Dienste auf der Website, insbesondere die
                  technischen, gelesen hat. Er ist allein verantwortlich für
                  seine Nutzung der Dienste.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer ist darüber informiert und akzeptiert, dass die
                  Umsetzung der Dienste eine Internetverbindung voraussetzt und
                  dass die Qualität der Dienste direkt von dieser Verbindung
                  abhängt, für die er allein verantwortlich ist
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, keine Vorschläge mit
                  Werbecharakter oder zur Förderung von Dienstleistungen mit
                  Gewinnabsicht zu veröffentlichen. Der Nutzer verpflichtet
                  sich, keine nicht ernst gemeinten oder themenfremden
                  Vorschläge zu veröffentlichen. Der Nutzer verpflichtet sich
                  zur rein persönlichen Nutzung der Dienste. Folglich darf er
                  seine Rechte und Pflichten aus diesem Vertrag weder ganz noch
                  teilweise an Dritte abtreten, einräumen oder übertragen, in
                  welcher Weise auch immer.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, keine Vorschläge zu
                  veröffentlichen, die Werbung für Parteien, Organisationen oder
                  Personen des öffentlichen Lebens darstellen oder diese
                  verunglimpfen.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer ist auch allein verantwortlich für die Beziehungen,
                  die er mit anderen Nutzern eingeht und die Informationen, die
                  er ihnen im Rahmen der Dienste mitteilt. Es liegt in der
                  Verantwortung des Nutzers, bei diesen Beziehungen und
                  Kommunikationen die erforderliche Sorgfalt und Diskretion
                  walten zu lassen. Der Nutzer verpflichtet sich außerdem, im
                  Austausch mit anderen Nutzern die üblichen Regeln der
                  Höflichkeit zu beachten.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, keine Kommentare oder Vorschläge
                  zu machen, die gegen das Gesetz oder die guten Sitten
                  verstoßen, insbesondere (ohne dass diese Aufzählung einen
                  Anspruch auf Vollständigkeit erhebt):
                </StaticParagraphStyle>
                <StaticSquareListStyle>
                  <StaticSquareListItemStyle>
                    keine Äußerungen, die zum Rassenhass aufstacheln,
                    rassistische, antisemitische, fremdenfeindliche, homophobe
                    Äußerungen, usw.;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine gewalttätigen, pornografischen, pädophilen Äußerungen
                    etc.;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine beleidigenden, verunglimpfenden, diffamierenden oder
                    die Persönlichkeitsrechte Dritter verletzende Äußerungen;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine Äußerungen, die Verbrechen gegen die Menschlichkeit
                    und anerkannten Völkermorden leugnen und Verbrechen
                    verherrlichen;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine Anstiftung zu strafbaren Handlungen, wie z. B.
                    Anstiftung zur Gewalt, zum Terrorismus, zum Verkauf von
                    Betäubungsmitteln etc.;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine Äußerungen, die die Privatsphäre oder geistige
                    Eigentumsrechte anderer Personen verletzen;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine Äußerungen, die gegen die Unschuldsvermutung oder das
                    Untersuchungsgeheimnis verstoßen etc.;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine Äußerungen, die die Menschenwürde verletzen;
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    keine Äußerungen, die als Missbrauch des Rechts auf freie
                    Meinungsäußerung angesehen werden könnten.
                  </StaticSquareListItemStyle>
                </StaticSquareListStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section8">
                <StaticFourthLevelTitleStyle>
                  Beziehung zu Make.org
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, Make.org alle Informationen zur
                  Verfügung zu stellen, die für die ordnungsgemäße Erbringung
                  der Dienste erforderlich sind. Im Allgemeinen stimmt der
                  Nutzer zu, aktiv mit Make.org bei der ordnungsgemäßen
                  Durchführung dieses Vertrages zusammenzuarbeiten.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, dafür zu sorgen, dass seine
                  Vorschläge in Übereinstimmung mit den Indexierungs-,
                  Formatierungs- und Hervorhebungsregeln von Make.org, in seiner
                  Eigenschaft als Herausgeber des Dienstes, wiedergegeben
                  werden.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
            </StaticSecondaryOrderedListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              NUTZERGARANTIEN
            </StaticThirdLevelTitleStyle>
            <StaticSecondaryOrderedListStyle>
              <StaticSecondaryOrderedListItemStyle className="section9">
                <StaticFourthLevelTitleStyle>
                  Inhalte
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Der Nutzer ist allein verantwortlich für die Inhalte jeglicher
                  Art (redaktionelle, grafische, audiovisuelle oder andere,
                  einschließlich des Namens und/oder des Bildes, das der Nutzer
                  zu seiner Identifizierung auf der Website gewählt hat), die er
                  im Rahmen der Dienste verbreitet (im Folgenden: die
                  &rdquo;Inhalte&rdquo;).
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer garantiert Make.org, dass er über alle Rechte und
                  Berechtigungen verfügt, die für die Verbreitung dieser Inhalte
                  notwendig sind.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, sicherzustellen, dass solche
                  Inhalte rechtmäßig sind, nicht gegen die öffentliche Ordnung,
                  die öffentliche Moral oder die Rechte Dritter verstoßen, keine
                  gesetzlichen oder behördlichen Bestimmungen verletzen und,
                  ganz allgemein, keine zivil- oder strafrechtliche Haftung von
                  Make.org nach sich ziehen können.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Dem Nutzer ist es daher untersagt, insbesondere folgende
                  Inhalte zu verbreiten (ohne dass diese Aufzählung einen
                  Anspruch auf Vollständigkeit erhebt):
                </StaticParagraphStyle>
                <StaticSquareListStyle>
                  <StaticSquareListItemStyle>
                    pornografische, obszöne, unanständige, schockierende oder
                    für ein Familienpublikum ungeeignete, verleumderische,
                    beleidigende, gewalttätige, rassistische, fremdenfeindliche
                    oder revisionistische Inhalte,
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    Verletzende Inhalte,
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    Inhalte, die das Ansehen eines Dritten schädigen,
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    Inhalte, die falsch oder irreführend sind oder die illegale,
                    betrügerische oder täuschende Handlungen vorschlagen oder
                    fördern,
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    Inhalte, die für die Computersysteme Dritter schädlich sind
                    (wie z. B. Viren, Würmer, Trojanische Pferde, etc.),
                  </StaticSquareListItemStyle>
                  <StaticSquareListItemStyle>
                    und ganz allgemein Inhalte, die geeignet sind, die Rechte
                    Dritter zu verletzen oder Dritten zu schaden, in welcher
                    Form auch immer.
                  </StaticSquareListItemStyle>
                </StaticSquareListStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section9">
                <StaticFourthLevelTitleStyle>
                  Beschränkungen der Nutzung der Dienste
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Der Nutzer erkennt an, dass die Dienste ihm eine zusätzliche,
                  aber keine alternative Lösung zu den Mitteln bieten, die er
                  bereits anderweitig zur Erreichung desselben Ziels einsetzt,
                  und dass diese Lösung diese anderen Mittel nicht ersetzen
                  kann.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer muss die notwendigen Maßnahmen ergreifen, um die
                  von ihm als notwendig erachteten Informationen aus seinem
                  persönlichen Bereich mit eigenen Mitteln zu speichern.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer ist darüber informiert und akzeptiert, dass die
                  Implementierung der Dienste eine Verbindung zum Internet
                  erfordert und dass die Qualität der Dienste direkt von dieser
                  Verbindung abhängt, für die er allein verantwortlich ist.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section9">
                <StaticFourthLevelTitleStyle>
                  Ansprüche und Entschädigung
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Der Nutzer stellt Make.org von allen Ansprüchen, Beschwerden,
                  Klagen und Forderungen frei, die Make.org als Folge der
                  Verletzung von Verpflichtungen oder Nutzergarantien gemäß
                  diesen Bedingungen erleiden könnte.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Der Nutzer verpflichtet sich, Make.org für jeglichen Schaden
                  zu entschädigen und alle Kosten, Gebühren und/oder Urteile zu
                  zahlen, die für Make.org dadurch entstehen können.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
            </StaticSecondaryOrderedListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              VERBOTENE VERHALTENSWEISE
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Es ist strengstens untersagt, die Dienste für die folgenden Zwecke
              zu nutzen:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                für die Beteiligung an illegalen oder betrügerischen Aktivitäten
                oder an Aktivitäten, die die Rechte oder die Sicherheit anderer
                Personen verletzen,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                für die Verletzung der öffentlichen Ordnung oder die Verletzung
                der geltenden Gesetze und Vorschriften,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                für das Eindringen in das Computersystem eines Dritten oder
                jegliche Aktivitäten, die darauf abzielen, das Computersystem
                eines Dritten ganz oder teilweise zu schädigen, zu
                kontrollieren, zu stören oder abzufangen, seine Integrität oder
                Sicherheit zu verletzen,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                für das Versenden von unaufgeforderten E-Mails und/oder
                kommerzieller Prospektion oder Anwerbung,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                für Manipulationen, die dazu dienen, die Referenzierung einer
                fremden Seite zu verbessern,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                für die Beihilfe oder Anstiftung, in welcher Form auch immer, zu
                einer oder mehreren der oben beschriebenen Handlungen und
                Aktivitäten,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                und ganz allgemein für jede Praxis, die die Dienste zu anderen
                Zwecken als denen, für die sie konzipiert wurden, missbraucht.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Den Nutzern ist es strengstens untersagt, das Konzept, die
              Technologien oder jedes andere Element der Make.org-Website für
              eigene Zwecke oder die von Dritten zu kopieren und/oder zu
              missbrauchen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Ebenfalls strengstens verboten sind: (i) jedes Verhalten, das
              geeignet ist, die Kontinuität der Dienste zu unterbrechen,
              auszusetzen, zu verlangsamen oder zu verhindern, (ii) jedes
              Eindringen oder versuchte Eindringen in die Systeme von Make.org,
              (iii) jede Umleitung der Systemressourcen der Website, (iv) jede
              Handlung, die eine unverhältnismäßige Belastung der Infrastruktur
              der Website darstellen könnte, (v) jede Verletzung von
              Sicherheits- und Authentifizierungsmaßnahmen, (vi) jede Handlung,
              die die finanziellen, kommerziellen oder moralischen Rechte und
              Interessen von Make.org oder seinen Website-Nutzern verletzen
              könnte, und allgemein (vii) jede Verletzung dieser Allgemeinen
              Nutzungsbedingungen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Es ist strengstens untersagt, den Zugang zu den Diensten oder der
              Website sowie die darin gehosteten und/oder geteilten
              Informationen ganz oder teilweise zu Geld zu machen, zu verkaufen
              oder zu lizenzieren.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              EINSCHRÄNKUNGEN DER GARANTIEN VON MAKE.ORG
            </StaticThirdLevelTitleStyle>
            <StaticSecondaryOrderedListStyle>
              <StaticSecondaryOrderedListItemStyle className="section11">
                <StaticFourthLevelTitleStyle>
                  Qualität der Dienstleistung
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Make.org kann nicht garantieren, dass der Dienst nicht
                  unterbrochen wird. Make.org verpflichtet sich, den Service
                  sorgfältig und ordnungsgemäß bereitzustellen, wobei dies nur
                  die Verpflichtung beinhaltet, auf das angestrebte Ergebnis
                  hinzuwirken, was die Nutzer ausdrücklich anerkennen und
                  akzeptieren.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Make.org verpflichtet sich, regelmäßige Kontrollen
                  durchzuführen, um den Betrieb und die Erreichbarkeit der
                  Website zu überprüfen. In diesem Zusammenhang behält sich
                  Make.org das Recht vor, den Zugriff auf die Website für
                  Wartungszwecke vorübergehend zu unterbrechen. Ebenso kann
                  Make.org nicht für Schwierigkeiten oder vorübergehende
                  Unmöglichkeit des Zugriffs auf die Website aufgrund von
                  Umständen, die sich seiner Kontrolle entziehen, höherer Gewalt
                  oder aufgrund von Störungen in den Telekommunikationsnetzen
                  verantwortlich gemacht werden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Make.org garantiert den Nutzern nicht, dass (i) die Dienste,
                  die ständig zum Zweck der Verbesserung der Leistung und des
                  Fortschritts weiterentwickelt werden, völlig frei von Fehlern,
                  Mängeln oder Unzulänglichkeiten sind, (ii) die Dienste, die
                  Standard sind und nicht nur für die Nutzung eines bestimmten
                  Nutzers nach seinen eigenen persönlichen Einschränkungen
                  angeboten werden, speziell seinen Bedürfnissen und Erwartungen
                  entsprechen.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section11">
                <StaticFourthLevelTitleStyle>
                  Inhalt
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Obwohl die Dienste moderiert werden, kann Make.org nicht für
                  Inhalte verantwortlich gemacht werden, deren Urheber Dritte
                  sind, und jegliche Reklamationen sollten in erster Instanz an
                  den Urheber des fraglichen Inhalts gerichtet werden.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Inhalte, die für Dritte schädlich sind, können Make.org gemäß
                  den Bestimmungen des Artikels 6 I 5 des französischen Gesetzes
                  Nr. 2004-575 vom 21. Juni 2004 über das Vertrauen im digitalen
                  Wirtschaftsverkehr gemeldet werden, wobei Make.org sich das
                  Recht vorbehält, die in Artikel 12 beschriebenen Maßnahmen zu
                  ergreifen.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section11">
                <StaticFourthLevelTitleStyle>
                  Verlust von Informationen
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Da der Dienst kostenlos zur Verfügung gestellt wird, lehnt
                  Make.org jede Verantwortung und jeden Anspruch auf
                  Schadenersatz für den Verlust von Informationen ab, die im
                  persönlichen Bereich des Nutzers zugänglich sind, da es in der
                  Verantwortung des Nutzers liegt, eine Kopie davon zu
                  erstellen.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section11">
                <StaticFourthLevelTitleStyle>
                  Schäden
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  In jedem Fall ist die Haftung, die Make.org unter den
                  vorliegenden Bedingungen entstehen kann, ausdrücklich auf
                  nachgewiesene direkte Schäden des Nutzers beschränkt.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
            </StaticSecondaryOrderedListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              GEISTIGES EIGENTUM
            </StaticThirdLevelTitleStyle>
            <StaticSecondaryOrderedListStyle>
              <StaticSecondaryOrderedListItemStyle className="section12">
                <StaticFourthLevelTitleStyle>
                  Eigentum von Make.org
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Make.org erhebt keinen Anspruch auf das Eigentum an den von
                  den Nutzern bereitgestellten Daten und Inhalten.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Die Systeme, Software, Strukturen, Infrastrukturen,
                  Datenbanken und Inhalte jeglicher Art (Texte, Bilder, Visuals,
                  Musik, Logos, Marken, Datenbanken etc.), die von Make.org auf
                  der Website verwendet werden, sind durch alle geltenden Rechte
                  des geistigen Eigentums oder Rechte der Hersteller von
                  Datenbanken geschützt.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Für jede unbefugte Vervielfältigung, Darstellung,
                  Veröffentlichung, Übertragung oder, allgemeiner, jede
                  unbefugte Nutzung des gesamten oder eines Teils des Dienstes
                  und der darin enthaltenen Informationen, ohne die
                  ausdrückliche Genehmigung von Make.org, haftet der Nutzer.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Jegliche Demontage, Dekompilierung, Entschlüsselung,
                  Extraktion, Wiederverwendung, Vervielfältigung und,
                  allgemeiner, jegliche Vervielfältigung, Darstellung,
                  Verteilung und Verwendung eines dieser Elemente, ganz oder
                  teilweise, ohne die Genehmigung von Make.org ist strengstens
                  untersagt und kann Gegenstand rechtlicher Schritte sein.
                </StaticParagraphStyle>
                <StaticStrongStyle>
                  Rechte des Datenbankherstellers
                </StaticStrongStyle>
                <StaticParagraphStyle>
                  Make.org ist gemäß Artikel L.341-1 ff. des französischen
                  Gesetzes über geistiges Eigentum (Code de la propriété
                  intellectuelle) Hersteller der Datenbank(en), die von der
                  Website gebildet werden. Make.org verbietet ausdrücklich: (1)
                  die Entnahme (durch dauerhafte oder vorübergehende
                  Übertragung) der Gesamtheit oder eines qualitativ oder
                  quantitativ wesentlichen Teils des Inhalts der Datenbank auf
                  einen anderen Datenträger, unabhängig davon, mit welchen
                  Mitteln und in welcher Form, (2) die Weiterverwendung durch
                  Veröffentlichung der Gesamtheit oder eines qualitativ oder
                  quantitativ wesentlichen Teils des Inhalts der Datenbank,
                  unabhängig davon, in welcher Form (3) die wiederholte und
                  systematische Entnahme oder Weiterverwendung von qualitativ
                  oder quantitativ unwesentlichen Teilen des Inhalts der
                  Datenbank, wenn diese Vorgänge offensichtlich über die
                  normalen Bedingungen der Nutzung der Datenbank hinausgehen.
                  Eine derartige Wiederverwendung oder Entnahme kann die zivil-
                  und/oder strafrechtliche Haftung des Urhebers nach sich
                  ziehen. Im Falle der Nichtanwendung der Artikel L.341-1 ff.
                  des französischen Gesetzes über geistiges Eigentum kann jede
                  Entnahme oder Nutzung des Inhalts der Datenbank, die nicht
                  ausdrücklich und vorher von Make.org genehmigt wurde, die
                  zivilrechtliche Haftung (insbesondere die vertragliche Haftung
                  für die Nutzer der Website) und/oder die strafrechtliche
                  Haftung des Urhebers auslösen.
                </StaticParagraphStyle>
                <StaticParagraphStyle>
                  Make.org behält sich das Recht vor, seine Rechte geltend zu
                  machen und rechtliche Schritte gegen diejenigen einzuleiten,
                  die gegen dieses Verbot aus verschiedensten Gründen verstoßen.
                  Keine Bestimmung dieser Klausel ist als Verzicht auf solche
                  Rechte und Rechtsmittel auszulegen.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
              <StaticSecondaryOrderedListItemStyle className="section12">
                <StaticFourthLevelTitleStyle>
                  Eigentum an den Bürgervorschlägen
                </StaticFourthLevelTitleStyle>
                <StaticParagraphStyle>
                  Die Bürgervorschläge selbst sind Eigentum ihrer Autoren, die
                  Make.org eine nicht-exklusive, übertragbare und kostenlose
                  Lizenz zur Nutzung in Frankreich und weltweit, für jede
                  Online-Nutzung und für alle Verbreitungswege, für die Dauer
                  dieser ANB und für alle hier genannten Nutzungen gewähren.
                </StaticParagraphStyle>
              </StaticSecondaryOrderedListItemStyle>
            </StaticSecondaryOrderedListStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              LINKS UND WEBSITES DRITTER
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org ist in keiner Weise verantwortlich für die technische
              Verfügbarkeit von Websites oder mobilen Anwendungen, die von
              Dritten (einschließlich seiner möglichen Partner) betrieben
              werden, auf die der Nutzer über die Website zugreifen kann.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Make.org ist nicht verantwortlich für den Inhalt, die Werbung, die
              Produkte und/oder die Dienstleistungen, die auf solchen Websites
              und mobilen Anwendungen von Dritten verfügbar sind, die durch ihre
              eigenen Nutzungsbedingungen geregelt sind.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Make.org ist nicht verantwortlich für Transaktionen zwischen dem
              Nutzer und einem Werbetreibenden, Fachmann oder Händler
              (einschließlich seiner Partner), an die der Nutzer über die
              Website weitergeleitet wird, und ist in keinem Fall Partei bei
              Streitigkeiten mit solchen Dritten in Bezug auf die Lieferung von
              Produkten und/oder Dienstleistungen, Garantien, Zusicherungen oder
              anderen Verpflichtungen jeglicher Art.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              RECHTSFOLGEN UND KÜNDIGUNG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Im Falle eines Verstoßes gegen eine der Bestimmungen dieser
              Nutzungsbedingungen oder, allgemeiner, eines Verstoßes gegen
              geltende Gesetze und Vorschriften durch einen Nutzer, behält sich
              Make.org das Recht vor, alle geeigneten Maßnahmen zu ergreifen und
              insbesondere:
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                den Zugang zu den Diensten des Nutzers, der Urheber des
                Verstoßes oder der Verletzung ist oder daran teilgenommen hat,
                auszusetzen oder zu beenden,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                die auf der Website veröffentlichten Inhalte zu löschen,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                auf der Website alle Informationsmeldungen zu veröffentlichen,
                die Make.org für nützlich hält,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                jegliche zuständige Behörde zu benachrichtigen,
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                rechtliche Schritte einzuleiten.
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
            <StaticParagraphStyle>
              Im Allgemeinen kann Make.org im Falle eines Verstoßes des Nutzers
              gegen seine Verpflichtungen hierunter und/oder im Falle eines
              Verstoßes gegen ein anwendbares Gesetz oder eine Verordnung diese
              Nutzungsbedingungen von Rechts wegen und ohne vorherige
              Ankündigung oder Formalitäten kündigen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die Kündigung dieser Allgemeinen Nutzungsbedingungen führt zur
              Beendigung des Zugangs zu den Diensten für den betreffenden Nutzer
              sowie zur Löschung seiner Daten und Inhalte. Der Nutzer wird über
              diese Kündigung per E-Mail an die von ihm bei der Registrierung
              angegebene Adresse informiert. Die Kündigung erfolgt unbeschadet
              etwaiger
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Schadensersatzansprüche, die Make.org als Entschädigung für einen
              durch die angeblichen Verstöße des Nutzers entstandenen Schaden
              geltend machen kann. Make.org kann dem Nutzer anschließend die
              Erstellung eines neuen Kontos auf der Plattform verweigern.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Da die Dienste kostenlos sind, kann Make.org jederzeit und ohne
              Vorankündigung, ohne Angabe von Gründen, vorübergehend oder
              dauerhaft die Veröffentlichung eines Bürgervorschlags löschen.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Aufgrund der Unentgeltlichkeit der Dienste kann Make.org die
              Dienste jederzeit und ohne vorherige Ankündigung vorübergehend
              oder dauerhaft ändern bzw. vollständig oder teilweise löschen.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              DAUER DER DIENSTE, ABMELDUNG
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Die Dienste werden für einen unbestimmten Zeitraum abonniert.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Der registrierte Nutzer kann sich jederzeit von den Diensten
              abmelden, indem er eine entsprechende Anfrage an Make.org per
              E-Mail an{' '}
              <RedLinkHTMLElementStyle href={`mailto:${CONTACT_EMAIL_DE}`}>
                {`${CONTACT_EMAIL_DE}`}
              </RedLinkHTMLElementStyle>{' '}
              sendet.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Die Abmeldung ist sofort wirksam. Sie führt zur automatischen
              Löschung des Kontos des registrierten Nutzers sowie seiner
              Vorschläge.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>ÄNDERUNGEN</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Make.org behält sich das Recht vor, diese Bestimmungen und
              Bedingungen jederzeit zu ändern.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Der Nutzer wird über diese Änderungen durch jede geeignete Art der
              Kommunikation informiert.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Der Nutzer, der die geänderten Bedingungen nicht akzeptiert, muss
              sich von den Diensten gemäß den in diesen allgemeinen
              Nutzungsbedingungen der Website festgelegten Bedingungen abmelden.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Jeder Nutzer, der die Dienste nach dem Inkrafttreten der
              geänderten allgemeinen Nutzungsbedingungen nutzt, gilt als mit
              diesen Änderungen einverstanden.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>INTEGRITÄT</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Sollten eine oder mehrere der hierin enthaltenen Bestimmungen
              durch ein Gesetz oder eine Verordnung oder durch eine
              rechtskräftige Entscheidung eines zuständigen Gerichts für
              ungültig erklärt werden, so gelten sie als nicht geschrieben. Die
              übrigen Bestimmungen dieser Vereinbarung bleiben, sofern möglich,
              unter Beibehaltung ihrer ganzen Tragweite in Kraft und die
              Parteien verpflichten sich, soweit erforderlich, zusammenzukommen,
              um die unwirksame Bestimmung durch eine wirksame Bestimmung zu
              ersetzen, die dem Geist derjenigen, die sie ersetzen soll,
              möglichst nahekommt.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              VERZICHTSAUSSCHLUSS
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Das Versäumnis einer Partei, sich zu irgendeinem Zeitpunkt auf
              eine der Bestimmungen dieser Vereinbarung zu berufen, ist nicht
              als Verzicht auf ihre Rechte aus dieser Vereinbarung auszulegen
              oder zu betrachten, berührt in keiner Weise die Gültigkeit der
              gesamten Vereinbarung oder eines Teils davon und beeinträchtigt
              nicht die Rechte der betroffenen Partei, entsprechend zu handeln.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              In Ermangelung einer schriftlichen Verzichtserklärung wird davon
              ausgegangen, dass keine Partei auf ein Recht aus dem Vertrag
              verzichtet hat.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              HÖHERE GEWALT
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Alle unvorhersehbaren, unabwendbaren Ereignisse, die außerhalb des
              Einflusses der Parteien liegen, wie z. B. (aber nicht beschränkt
              auf) Kriegshandlungen oder Terrorismus, kriminelle Handlungen,
              Unruhen, Natur- oder Industriekatastrophen, Explosionen,
              gesetzliche Anforderungen und andere gesetzliche oder behördliche
              Bestimmungen, die die Ausübung der Tätigkeit von Make.org
              einschränken, Störungen elektronischer Kommunikationsnetze, die
              außerhalb der Kontrolle von Make.org liegen, usw., werden als
              höhere Gewalt betrachtet. Im Falle von höherer Gewalt kann
              Make.org den Dienst aussetzen. Die Wirkungen des Vertrages werden
              dann ausgesetzt und können nach Beendigung des Ereignisses höherer
              Gewalt für den Rest der Vertragslaufzeit wieder aufgenommen
              werden. Sie können auch ausgesetzt bleiben.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>SPRACHE</StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Im Falle einer Übersetzung dieser Allgemeinen Nutzungbedingungen
              in eine oder mehrere Sprachen ist im Falle eines Widerspruchs oder
              eines Streits über die Bedeutung eines Begriffs oder einer
              Bestimmung die französische Sprache für die Auslegung maßgeblich.{' '}
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              ANWENDBARES RECHT UND GERICHTSBARKEIT
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Die vorliegenden allgemeinen Bedingungen unterliegen dem
              französischen Recht.
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              Im Falle eines Rechtsstreits über die Gültigkeit, Auslegung
              und/oder Ausführung dieser allgemeinen Nutzungsbedingungen
              vereinbaren die Parteien die ausschließliche Zuständigkeit der
              Gerichte in Paris, sofern nicht zwingende Verfahrensvorschriften
              entgegenstehen.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
          <StaticPrimaryOrderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              INKRAFTTRETEN
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              Diese Nutzungsbedingungen sind am{' '}
              {DateHelper.localizedAndFormattedDate(
                GTU_DATE,
                DATE_CAPITALIZE_L_FORMAT
              )}{' '}
              in Kraft getreten.
            </StaticParagraphStyle>
          </StaticPrimaryOrderedListItemStyle>
        </StaticPrimaryOrderedListStyle>
      </StaticPageWrapperStyle>
    </>
  );
};

// default export needed for loadable component
export default TermsOfUseDE; // eslint-disable-line import/no-default-export
