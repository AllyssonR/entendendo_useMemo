export type UserProps = {
  id: number;
  name: string;
  email: string;
};

export function User({ id, name, email }: UserProps) {
  return (
    <li>
      id:{id} || name:{name} || email:{email}
    </li>
  );
}
