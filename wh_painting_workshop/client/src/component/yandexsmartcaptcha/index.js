import { useEffect, useState, useCallback }from "react";
import { SmartCaptcha } from '@yandex/smart-captcha';
import { getCaptchaRequest } from "../../services/captchaReq";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import './style.css';

export default function YaCaptcha(props) {
  const { resetCaptcha, visible, getNewStatus,changeVisible, t} = props;
  const [ token, setToken] = useState("");
  const [ status, setStatus ] = useState('hidden');
  const [ open, setOpen ] = useState(false);
  const [ thisLanguage, setThisLanguage ] = useState(localStorage.getItem('language'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChallengeVisible = useCallback(() => setStatus('visible'), []);
  const handleChallengeHidden = useCallback(() => setStatus('hidden'), []);
  const handleNetworkError = useCallback(() => setStatus('network-error'), []);

  const handleSuccess = useCallback((token) => {
    setStatus('success');
    setToken(token);
    handleClose(true)
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
  }, [status]);

  return (
    <>
      <Button 
        variant="contained"
        onClick={()=>{
          changeVisible();
          handleOpen();
        }}
      >
        <p>{t("add review")}</p>
      </Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > 
      <Box sx={style}>
        <SmartCaptcha
            sitekey="ysc1_ltlUcYhTURZRsbPQsmycogucGQCreQ9VBZSQE0Yo00b47a92"
            onChallengeVisible={handleChallengeVisible}
            onChallengeHidden={handleChallengeHidden}
            onNetworkError={handleNetworkError}
            onSuccess={handleSuccess}
            onTokenExpired={handleTokenExpired}
            key={resetCaptcha}
            // test={true}
            visible={visible}
            language={thisLanguage}
            hideShield={true}
          />
      </Box>
    </Modal>
    </>
  );
};
