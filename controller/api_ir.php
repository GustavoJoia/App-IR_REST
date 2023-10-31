<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    require_once('../model/Pagante.php');
    require_once('../model/Conexao.php');

    $metodo = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents('php://input'));
    $pessoa = new Pagante();
    $pessoa->setId($data[0]);
    $pessoa->setNome($data[1]);
    $pessoa->setCpf($data[2]);
    $pessoa->setRendimento($data[3]);
    $divida = $pessoa->calcularDivida();
    if($divida[0]=='Isento'){
        $pessoa->setDivida(0);
    } else {
        $pessoa->setDivida($divida[0]);
    }
    $pessoa->setAliquota($divida[1]);

    $conexao = Conexao::conectar();

    if($metodo == 'POST'){

        $insert = 'INSERT INTO tbpessoa(nomePessoa, cpfPessoa, rendimentoPessoa, dividaPessoa, percentualPessoa)
        VALUES (?,?,?,?,?)';
        $prepare = $conexao->prepare($select);
        $prepare->bindValue(1, $pessoa->getNome());
        $prepare->bindValue(2, $pessoa->getCpf());
        $prepare->bindValue(3, $pessoa->getRendimento());
        $prepare->bindValue(4, $pessoa->getDivida());
        $prepare->bindValue(5, $pessoa->getAliquota());

        try{

            $prepare->execute();
            return true;

        } catch(Exception $e){

            return false;

        }


    } else if($metodo == 'PUT'){

        $update = 'UPDATE tbpessoa 
        SET nomePessoa = ?, cpfPessoa = ?, rendimentoPessoa = ?, dividaPessoa = ?, aliquotaPessoa = ?
        WHERE idPessoa = ?';
        $prepare = $conexao->prepare($update);
        $prepare->bindValue(1, $pessoa->getNome());
        $prepare->bindValue(2, $pessoa->getCpf());
        $prepare->bindValue(3, $pessoa->getRendimento());
        $prepare->bindValue(4, $pessoa->getDivida());
        $prepare->bindValue(5, $pessoa->getAliquota());
        $prepare->bindValue(6, $pessoa->getId());

    } else if($metodo == 'GET'){

        $select = 'SELECT * FROM tbpessoa';
        $query = $conexao->prepare($select);

        try{

            $query->execute();
            $lista = $query->fetchAll(PDO::FETCH_ASSOC);
            return [true, $lista];

        } catch(Exception $e){

            return false;

        }

    } else if($metodo == 'DELETE'){

        $delete = 'DELETE FROM tbpessoa WHERE idPessoa = ?';
        $prepare = $conexao->prepare($delete);
        $prepare->bindValue(1, $pessoa->getId());

        try{

            $prepare->execute();
            return true;

        } catch(Exception $e){

            return false;

        }
        
    }

?>