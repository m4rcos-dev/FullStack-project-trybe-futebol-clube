import * as bcrypt from 'bcryptjs';

export default function bcryptVerify(passwordBody: string, passwordDb: string): boolean {
  const passwordValidation = bcrypt.compareSync(passwordBody, passwordDb);
  return passwordValidation;
}
