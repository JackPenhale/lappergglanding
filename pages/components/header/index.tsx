import { tw, css } from 'twind/css';
import Button from '../button'

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Download. Connect. Compete.
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
          Laptime lobbies for a competitive Forza experience
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Start your lobby</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Powered by</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <img className={tw(`h-40 w-40`)} src="fathym.svg" alt="fathym logo" height={200} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
