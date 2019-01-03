import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: ""
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { activeSuggestion, filteredSuggestions, showSuggestions, userInput }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input type="text" onChange={onChange} onKeyDown={onKeyDown} value={userInput} />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default Autocomplete;

// [abilify,
//   amantadine hcl,
//   ambisome,
//   anastrozole,
//   antabuse,
//   aptivus,
//   aranesp,
//   aricept,
//   arimidex,
//   aromasin,
//   atamet,
//   atgam,
//   atripla,
//   avonex,
//   belbuca,
//   betaseron,
//   bidil,
//   buprenex,
//   calcijex,
//   calcitriol,
//   calcium acetate,
//   campath,
//   campral,
//   carbidopa,
//   carnitor,
//   casodex,
//   chlorpromazine,
//   clopidogrel,
//   clozapine,
//   clozaril,
//   cognex,
//   combivir,
//   copaxone,
//   crofelemer,
//   cyclosporine,
//   cystagon,
//   cytogam,
//   daliresp,
//   digoxin,
//   disulfiram,
//   donepezil,
//   dornase alpha,
//   emend,
//   emsam,
//   emtriva,
//   epivir,
//   epzicom,
//   evzio,
//   exelon,
//   femara,
//   filgrastim,
//   flutamide,
//   foscavir,
//   fosrenol,
//   fulyzaq,
//   galantamine,
//   ganciclovir,
//   gengraf,
//   geoden,
//   haldol,
//   haloperidol,
//   halperidone,
//   harvoni,
//   hectorol,
//   hydrea,
//   hydroxyurea,
//   insulin prior to age 50,
//   interferon,
//   intron-a,
//   invega,
//   invirase,
//   isosorbide,
//   lamivudine-zidovudine,
//   lanoxin,
//   larodopa,
//   latuda,
//   levodopa,
//   lexiva,
//   lupron,
//   megestrol,
//   memantine,
//   mercaptopurine,
//   methadone,
//   namenda,
//   narcan,
//   naloxone,
//   naltrexone,
//   navane,
//   neupogen,
//   nintedanib,
//   nitrostat,
//   nitro,
//   nitroglycerin,
//   norvir,
//   ofev,
//   pegintron,
//   peginterferon,
//   perphenazine,
//   prismasol,
//   prograf,
//   pulmozyme,
//   quetiapine,
//   rapamune,
//   razadyne,
//   rebif,
//   reminyl,
//   renagel,
//   renvela,
//   retrovir,
//   ribapak,
//   ribasphere,
//   ribavirin,
//   riluzole,
//   rilutek,
//   risperdal,
//   risperidone,
//   roferon-a,
//   sensipar,
//   seroquel,
//   sofosbuvir,
//   sovaldi,
//   spiriva,
//   stalevo,
//   stelazine,
//   stribild,
//   suboxone,
//   subutex,
//   sustiva,
//   tamoxifen,
//   targretin,
//   thiothixene,
//   tivicay,
//   trilafon,
//   trizivir,
//   viracept,
//   viramune,
//   viread,
//   zemplar,
//   zidovudine,
//   zyprexa,
//   zytiga,
//   amiodarone hcl,
//   anoro ellipta,
//   benlysta,
//   bevespi aerosphere,
//   carbidopa-levadopa,
//   donepezil hcl,
//   effient,
//   geodon,
//   hydralazine,
//   inspra,
//   lithium,
//   methyldopa,
//   pegasys,
//   plavix,
//   pletal,
//   ranexa,
//   risperdone,
//   serzone,
//   sinemet,
//   stiolto respimat,
//   trelegy ellipta,
//   utibron neohaler,
//   aripcept,
//   coumadin,
//   dexamethasone,
//   enbrel,
//   imuran,
//   methotrexate,
//   prochlorperazine,
//   remicade,
//   warfarin,
//   abacavir,
//   alkeran,
//   amiodarone,
//   ampyra,
//   azilect,
//   baraclude,
//   caprelsa,
//   cellcept,
//   chlorpromazine hcl,
//   aggrenox,
//   carvedilol,
//   crixivan,
//   cytoxan,
//   droxia,
//   eligard,
//   eminase,
//   epivir hbv,
//   ergoloid mesylates,
//   floxuridine,
//   fluorouracil,
//   hydrobromide,
//   gammagard,
//   gamunex,
//   coreg,
//   digitek,
//   infergen,
//   leucovorin calcium,
//   limbitrol,
//   megace,
//   megestrol acetate,
//   (megace),
//   mitomycin,
//   mycophenolate mofetil,
//   myfortic,
//   naloxone hcl,
//   naltrexone hcl,
//   panretin,
//   eliquis,
//   enoxaparin sodium,
//   peg-intron,
//   pradaxa,
//   revia,
//   revlimid,
//   rituxan,
//   sandimmune,
//   saphris,
//   lovenox,
//   symbyax,
//   teslac,
//   truvada,
//   zenapax,
//   zerit,
//   ziagen,
//   zoladex,
//   xarelto,
//   adcirca,
//   dobutamine hcl,
//   hepsera,
//   humira,
//   kalydeco,
//   morphine sulfate,
//   nabi-hb,
//   tysabri,
//   xeljanz,
//   aprepitant,
//   armasin,
//   avenox,
//   baclofen,
//   belimumab,
//   calcium acetrate,
//   disufram,
//   esylate,
//   floscavir,
//   furosemide,
//   halperidol,
//   hectoral,
//   ribaviran,
//   isosorbide & hydralazine,
//   laradopa,
// lasix,
//   lupton,
//   marijuana,
//   narcan/naloxone/naltrexone,
//   nitro-dur,
//   nitroquick,
//   navene,
//   olanzapine,
//   ondansetron,
//   roferon,
//   spirivia,
//   spironolactone,
//   sulfadiazine,
//   primasol,
// thorazine]
