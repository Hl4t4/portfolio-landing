import { getContentData } from './lib/fetchContent';
import { Root } from './interfaces/Root';
import MainPage from './components/MainPage';

export default function Home() {
  const root: Root = getContentData('data.json')
  
  return (
    <div>
      <MainPage root={root}></MainPage>
    </div>
  );
};
