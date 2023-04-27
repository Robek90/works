import {getVerification} from "./index";

describe('getVerification', () => {
  test('verification admin ', () => 
    getVerification({first_name: 'Станислав', uid: '323940'})
      .then(data => {expect(data).toBe(true)})
      .catch(data => {expect(data).toMatch('error')})
  );
})
