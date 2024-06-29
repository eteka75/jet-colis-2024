'use client';
import { useIntl } from 'react-intl';

const useTranslation = () => {
  const { formatMessage } = useIntl();
  return {
    t: (id: string, values = {}) => formatMessage({ id }, values),
  };
};

export default useTranslation;
