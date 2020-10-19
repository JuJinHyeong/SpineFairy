import CommandHandler from './CommandHandler';
import { endTimer } from './start';

const endExecute = () => {
  endTimer();
};

export default new CommandHandler(
  'end',
  '다시 불러주세요! 기다리고 있을게요!',
  endExecute
);
