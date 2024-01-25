import React, { useEffect, useState, useCallback }from "react";
import { InvisibleSmartCaptcha } from '@yandex/smart-captcha';
import { getCaptchaRequest } from "../../services/captchaReq";

import './style.css';

export default function YaCaptcha(props) {
  const { resetCaptcha, visible, getNewStatus } = props;
  const [ token, setToken] = useState("");
  
  const [ status, setStatus ] = useState('hidden');

  const handleChallengeVisible = useCallback(() => setStatus('visible'), []);
  const handleChallengeHidden = useCallback(() => setStatus('hidden'), []);
  const handleNetworkError = useCallback(() => setStatus('network-error'), []);
  const handleSuccess = useCallback((token) => {
    setStatus('success');
    setToken(token);
  }, []);
  const handleTokenExpired = useCallback(() => {
    setStatus('token-expired');
    setToken('');
  }, []);

  useEffect(() => {
    getNewStatus(status);
    if(token !== "") {
      getCaptchaRequest(token)
      .then(res=>localStorage.setItem("norobot",res));
    }
  }, [token, status]);

  return (
    <div className="feedback-captcha">
      <InvisibleSmartCaptcha
        sitekey="ysc1_ltlUcYhTURZRsbPQsmycogucGQCreQ9VBZSQE0Yo00b47a92"
        onChallengeVisible={handleChallengeVisible}
        onChallengeHidden={handleChallengeHidden}
        onNetworkError={handleNetworkError}
        onSuccess={handleSuccess}
        onTokenExpired={handleTokenExpired}
        key={resetCaptcha}
        test={true}
        visible={visible}
      />
    </div>
  );
};
