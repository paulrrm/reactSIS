import bcrypt from 'bcryptjs'

const useEncrypt = () => {
    

    function encrypta(pwd:string    ){
        const salt = bcrypt.genSaltSync(10)
        const bkey = bcrypt.hashSync(pwd, '$2a$10$CwTycUThq9StjUM0u')
        console.log(bkey)


        return bkey

    }
  return{
    encrypta
  }
}

export default useEncrypt