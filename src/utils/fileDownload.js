import {isEmpty} from './programUtils';
import {setToastError} from '../../../../../../WebstormProjects/cra1/src/store/actions/toastMessage';
import store from '../store';

const feature = '[FileDownload]';

export const download = (file, filename) => {
  if (isEmpty(file)) {
    store.dispatch(setToastError({message: 'Allalaetav fail tühi!'}, feature));
  } else {
    const blob = new Blob([file]);
    if (window.navigator.msSaveOrOpenBlob)
      // IE hack; see http://msdn.microsoft.com/en-us/library/ie/hh779016.aspx
      window.navigator.msSaveBlob(blob, filename);
    else {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
