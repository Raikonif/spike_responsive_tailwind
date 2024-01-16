import profile from "../assets/profile.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-semibold p-6">
      <img
        src={profile}
        className="sm:w-1/5 max-h-[700px] max-w-[700px] rounded-md border-2"
      />
      <div className="sm:w-4/5">
        <h1 className="text-center font-semibold text-2xl my-3 text-balance">
          {t("ABOUT")}
        </h1>
        <p className="my-2 flex flex-col text-pretty ml-3">
          HISTORY, PURPOSE AND USAGE Lorem ipsum, or lipsum as it is sometimes
          known, is dummy text used in laying out print, graphic or web designs.
          The passage is attributed to an unknown typesetter in the 15th century
          who is thought to have scrambled parts of Cicero's De Finibus Bonorum
          et Malorum for use in a type specimen book. It usually begins with:
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
          purpose of lorem ipsum is to create a natural looking block of text
          (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content. The passage experienced a surge in
          popularity during the 1960s when Letraset used it on their
          dry-transfer sheets, and again during the 90s as desktop publishers
          bundled the text with their software. Today it's seen all around the
          web; on templates, websites, and stock designs. Use our generator to
          get your own, or read on for the authoritative history of lorem ipsum.
        </p>
        <div className="flex items-end w-full justify-end">
          <div className="flex flex-col my-4 bg-fuchsia-600 rounded-sm w-full sm:w-fit items-center sm:items-end p-2">
            <span className="mb-1 font-semibold text-end text-slate-100">
              - Dr. Nandy Calle Peñaranda
            </span>
            <span className="font-semibold text-end text-slate-100">
              Medico en Anatomia Patologica
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
