import res from "express/lib/response.js"
import { db } from "../db.js"

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios"

    db.query(q, (err, data) => {
        if (err) return res.json(err)
            return res.status(200).json(data)
    })
}

export const addUser = (req, res) => {
    const q = 
        "INSERT INTO usuarios (nome, email, fone, nascimento) VALUES (?)";
const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.nascimento
]

db.query(q, [values], (err) => {
    if (err) return res.json(err)

        return res.status(200).json("Usuário cadastrado com sucesso")
})
}

export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET nome = ?, email = ?, fone = ?, nascimento = ? WHERE id = ?";

const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.nascimento
]
db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err)

        return res.status(200).json("Usuário alterado com sucesso")
})
}
export const deleteUser = (req, res) => {
    const q =
        "DELETE FROM usuarios WHERE id = ?";
console.log(req.params.id);
db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err)

        return res.status(200).json("Usuário deletado com sucesso")
})
}



