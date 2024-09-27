import br from "../assets/flags/br.svg";
import es from "../assets/flags/es.svg";
import sui from "../assets/flags/sui.svg";
import uk from "../assets/flags/uk.svg";
import fr from "../assets/flags/fr.svg";
import be from "../assets/flags/be.svg";
import hol from "../assets/flags/hol.svg";
import aus from "../assets/flags/aus.svg";
import usa from "../assets/flags/us.svg";
import indi from "../assets/flags/in.svg";
import pt from "../assets/flags/pt.svg";
import ge from "../assets/flags/ge.svg";
import ABT from "../assets/Times FE/ABT/ABT.svg";
import ABTBranco from '../assets/Times FE/ABT/ABT Branco.svg'
import ANDRETTI from "../assets/Times FE/ANDRETTI/Andretti.svg";  
import ANDRETTIBranco from '../assets/Times FE/ANDRETTI/Andretti Branco.svg'
import DSPENSKE from "../assets/Times FE/DS PENSKE/DS Penske.svg";
import DSPENSKEBranco from "../assets/Times FE/DS PENSKE/DS Penske Branco.svg";
import ENVISION from "../assets/Times FE/ENVISION/ENVISION.svg";
import ENVISIONBranco from "../assets/Times FE/ENVISION/ENVISION Branco.svg";
import ERT from "../assets/Times FE/ERT/ERT.svg";
import ERTBranco from "../assets/Times FE/ERT/ERT Branco.svg";
import JAGUAR from "../assets/Times FE/JAGUAR TCS/Jaguar TCS.svg";
import JAGUARBranco from "../assets/Times FE/JAGUAR TCS/Jaguar TCS Branco.svg";
import MAHINDRA from "../assets/Times FE/MAHINDRA/Mahindra.svg";
import MAHINDRABranco from "../assets/Times FE/MAHINDRA/Mahindra Branco.svg";
import MASSERATI from "../assets/Times FE/MASSERATI MSG/Masserati MSG.svg";
import MASSERATIBranco from "../assets/Times FE/MASSERATI MSG/Masserati MSG Branco.svg";
import MCLAREN from "../assets/Times FE/NEOM MCLAREN/NEOM McLaren.svg";
import MCLARENBranco from "../assets/Times FE/NEOM MCLAREN/NEOM McLaren Branco.svg";
import NISSAN from "../assets/Times FE/NISSAN/Nissan.svg";
import NISSANBranco from "../assets/Times FE/NISSAN/Nissan Branco.svg";
import HEUER from "../assets/Times FE/TAG HEUER PORSCHE/Tag Heuer Porsche.svg";
import HEUERBranco from "../assets/Times FE/TAG HEUER PORSCHE/Tag Heuer Porsche Branco.svg";
import LucasDiGrasssi from "../assets/Times FE/ABT/Lucas Di Grassi.png";
import NicoMuller from "../assets/Times FE/ABT/Nico Muller.png";
import Kelvin from "../assets/Times FE/ABT/Kelvin Van Der Linde.png";
import JakeDennis from "../assets/Times FE/ANDRETTI/Jake Dennis.png";
import NormanNato from "../assets/Times FE/ANDRETTI/Normal Nato.png";
import Jean from "../assets/Times FE/DS PENSKE/Jean Vergne.png";
import StoffelVandoorne from "../assets/Times FE/DS PENSKE/STOFFEL Vandoorne.png";
import Robin from "../assets/Times FE/ENVISION/Robin Frijns.png";
import SebastianBuemi from "../assets/Times FE/ENVISION/Sebastien Buemi.png";
import JoelEriksson from "../assets/Times FE/ENVISION/Joel Eriksson.png";
import DanTicktum from "../assets/Times FE/ERT/Dan Ticktum.png";
import SergioSette from "../assets/Times FE/ERT/Sergio Sette Camara.png";
import MtichEvans from "../assets/Times FE/JAGUAR TCS/Mitch Evans.png";
import NickCassidy from "../assets/Times FE/JAGUAR TCS/Nick Cassidy.png";
import EdoardoMortara from "../assets/Times FE/MAHINDRA/Edoardo Mortara.png";
import NyckDeVries from "../assets/Times FE/MAHINDRA/Nyck De Vries.png";
import JordanKing from "../assets/Times FE/MAHINDRA/Jordan King.png";
import JehanDaruvala from "../assets/Times FE/MASSERATI MSG/Jehan Daruvala.png";
import Maximillian from "../assets/Times FE/MASSERATI MSG/Maximilian Gunther.png";
import JakeHughes from "../assets/Times FE/NEOM MCLAREN/Jake Hughes.png";
import SamBird from "../assets/Times FE/NEOM MCLAREN/Sam Bird.png";
import TaylorBarnard from "../assets/Times FE/NEOM MCLAREN/Taylor Barnard.png";
import OliverRowland from "../assets/Times FE/NISSAN/Oliver Rowland.png";
import SachaFenestraz from "../assets/Times FE/NISSAN/Sacha Fenestraz.png";
import CaioCollet from "../assets/Times FE/NISSAN/Caio Collet.png";
import PascalWehlein from "../assets/Times FE/TAG HEUER PORSCHE/Pascal Wehrlein.png";
import AntonioFelixDaCosta from "../assets/Times FE/TAG HEUER PORSCHE/Antonio Felix Da Costa.png";

const pilotos = [
  {
    time: ABT,
    timeBranco: ABTBranco,
    piloto: [
      { 
        nome: "LUCAS", 
        sobrenome: "DI GRASSI", 
        fotoPiloto: LucasDiGrasssi, 
        nacionalidade: br 
      },
      { 
        nome: "NICO", 
        sobrenome: "MULLER", 
        fotoPiloto: NicoMuller, 
        nacionalidade: sui 
      },
      { 
        nome: "KELVIN", 
        sobrenome: "VAN DER LINDE", 
        fotoPiloto: Kelvin, 
        nacionalidade: es 
      },
    ],
  },
  {
    time: ANDRETTI,
    timeBranco: ANDRETTIBranco,
    piloto: [
      {
        nome: "JAKE",
        sobrenome: "DENNIS",
        fotoPiloto: JakeDennis,
        nacionalidade: uk,
      },
      {
        nome: "NORMAN",
        sobrenome: "NATO",
        fotoPiloto: NormanNato,
        nacionalidade: fr,
      },
    ],
  },

  {
    time: DSPENSKE,
    timeBranco: DSPENSKEBranco,
    piloto: [
      {
        nome: "JEAN ERIC",
        sobrenome: "VERGNE",
        fotoPiloto: Jean,
        nacionalidade: fr,
      },
      {
        nome: "STOFFEL",
        sobrenome: "VANDOORNE",
        fotoPiloto: StoffelVandoorne,
        nacionalidade: be,
      },
    ],
  },

  {
    time: ENVISION,
    timeBranco: ENVISIONBranco,
    piloto: [
      {
        nome: "ROBIN",
        sobrenome: "FRIJNS",
        fotoPiloto: Robin,
        nacionalidade: hol,
      },
      {
        nome: "SEBASTIAN",
        sobrenome: "BUEMI",
        fotoPiloto: SebastianBuemi,
        nacionalidade: sui,
      },
      {
        nome: "JOEL",
        sobrenome: "ERIKSSON",
        fotoPiloto: JoelEriksson,
        nacionalidade: es,
      },
    ],
  },

  // ert so tem 2 piloto
  {
    time: ERT,
    timeBranco: ERTBranco,
    piloto: [
      {
        nome: "DAN",
        sobrenome: "TIKTUM",
        fotoPiloto: DanTicktum,
        nacionalidade: uk,
      },
      {
        nome: "SERGIO",
        sobrenome: "SETTE CAMARA",
        fotoPiloto: SergioSette,
        nacionalidade: br,
      },
    ],
  },
  {
    time: JAGUAR,
    timeBranco: JAGUARBranco,
    piloto: [
      {
        nome: "MITCH",
        sobrenome: "EVANS",
        fotoPiloto: MtichEvans,
        nacionalidade: aus,
      },
      {
        nome: "NICK",
        sobrenome: "CASSIDY",
        fotoPiloto: NickCassidy,
        nacionalidade: aus,
      },
    ],
  },

  {
    time: MAHINDRA,
    timeBranco: MAHINDRABranco,
    piloto: [
      {
        nome: "EDOARDO",
        sobrenome: "MORTARA",
        fotoPiloto: EdoardoMortara,
        nacionalidade: sui,
      },
      {
        nome: "NYCK",
        sobrenome: "DE VRIES",
        fotoPiloto: NyckDeVries,
        nacionalidade: hol,
      },
      {
        nome: "JORDAN",
        sobrenome: "KING",
        fotoPiloto: JordanKing,
        nacionalidade: usa,
      },
    ],
  },

  // masserati so tem 2 piloto
  {
    time: MASSERATI,
    timeBranco: MASSERATIBranco,
    piloto: [
      {
        nome: "JEHAN",
        sobrenome: "DARUVALA",
        fotoPiloto: JehanDaruvala,
        nacionalidade: indi,
      },
      {
        nome: "MAXIMILLIAN",
        sobrenome: "GUNTHER",
        fotoPiloto: Maximillian,
        nacionalidade: ge,
      },
    ],
  },
  {
    time: MCLAREN,
    timeBranco: MCLARENBranco,
    piloto: [
      {
        nome: "JAKE",
        sobrenome: "HUGHES",
        fotoPiloto: JakeHughes,
        nacionalidade: uk,
      },
      {
        nome: "SAM",
        sobrenome: "BIRD",
        fotoPiloto: SamBird,
        nacionalidade: uk,
      },
      {
        nome: "TAYLOR",
        sobrenome: "BARNARD",
        fotoPiloto: TaylorBarnard,
        nacionalidade: uk,
      },
    ],
  },
  {
    time: NISSAN,
    timeBranco: NISSANBranco,
    piloto: [
      {
        nome: "OLIVER",
        sobrenome: "ROWLAND",
        fotoPiloto: OliverRowland,
        nacionalidade: uk,
      },
      {
        nome: "SACHA",
        sobrenome: "FENESTRAZ",
        fotoPiloto: SachaFenestraz,
        nacionalidade: fr,
      },
      {
        nome: "CAIO",
        sobrenome: "COLLET",
        fotoPiloto: CaioCollet,
        nacionalidade: br,
      },
    ],
  },
  {
    time: HEUER,
    timeBranco: HEUERBranco,
    piloto: [
      {
        nome: "PASCAL",
        sobrenome: "WEHRLEIN",
        fotoPiloto: PascalWehlein,
        nacionalidade: ge,
      },
      {
        nome: "ANTONIO FELIX",
        sobrenome: "DA COSTA",
        fotoPiloto: AntonioFelixDaCosta,
        nacionalidade: pt,
      },
    ],
  },
];

export default pilotos;
