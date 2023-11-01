<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: *");
    require_once('../model/Pagante.php');
    require_once('../model/Conexao.php');

    $metodo = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents('php://input'));

    $conexao = Conexao::conectar();

    if($metodo == 'POST'){

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

        $insert = 'INSERT INTO tbpessoa(nomePessoa, cpfPessoa, rendimentoPessoa, dividaPessoa, percentualPessoa)
        VALUES (?,?,?,?,?)';
        $prepare = $conexao->prepare($insert);
        $prepare->bindValue(1, $pessoa->getNome());
        $prepare->bindValue(2, $pessoa->getCpf());
        $prepare->bindValue(3, $pessoa->getRendimento());
        $prepare->bindValue(4, $pessoa->getDivida());
        $prepare->bindValue(5, $pessoa->getAliquota());

        $select = 'SELECT * FROM tbpessoa WHERE idPessoa = (SELECT MAX(idPessoa) FROM tbpessoa)';

        try{

            $prepare->execute();
            $query = $conexao->query($select);
            $lista = $query->fetch(PDO::FETCH_ASSOC);
            echo json_encode([true,$lista]);

        } catch(Exception $e){

            echo json_encode(false);

        }


    } else if($metodo == 'PUT'){

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

        $update = 'UPDATE tbpessoa 
        SET nomePessoa = ?, cpfPessoa = ?, rendimentoPessoa = ?, dividaPessoa = ?, percentualPessoa = ?
        WHERE idPessoa = ?';
        $prepare = $conexao->prepare($update);
        $prepare->bindValue(1, $pessoa->getNome());
        $prepare->bindValue(2, $pessoa->getCpf());
        $prepare->bindValue(3, $pessoa->getRendimento());
        $prepare->bindValue(4, $pessoa->getDivida());
        $prepare->bindValue(5, $pessoa->getAliquota());
        $prepare->bindValue(6, $pessoa->getId());

        $select = 'SELECT * FROM tbpessoa WHERE idPessoa = ?';
        $p = $conexao->prepare($select);
        $p->bindValue(1, $pessoa->getId());

        try{
            $prepare->execute();
            $p->execute();
            $lista = $p->fetch(PDO::FETCH_ASSOC);
            echo json_encode([true,$lista]);
        } catch (Exception $e){
            echo json_encode($e);
        }

    } else if($metodo == 'GET'){

        $data = $_GET['query'];

        if($data=='' || $data==null){
            $select = 'SELECT * FROM tbpessoa';
            $query = $conexao->prepare($select);
        } else {
            $select = 'SELECT * FROM tbpessoa WHERE nomePessoa LIKE ? OR cpfPessoa LIKE ?';
            $query = $conexao->prepare($select);
            $query->bindValue(1, '%'.$data.'%');
            $query->bindValue(2, '%'.$data.'%');
        }

        try{

            $query->execute();
            $lista = $query->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode([true, $lista]);

        } catch(Exception $e){

            echo json_encode(false);

        }

    } else if($metodo == 'DELETE'){

        $pessoa = new Pagante();
        $pessoa->setId($data[0]);

        $delete = 'DELETE FROM tbpessoa WHERE idPessoa = ?';
        $prepare = $conexao->prepare($delete);
        $prepare->bindValue(1, $pessoa->getId());

        try{

            $prepare->execute();
            echo json_encode(true);

        } catch(Exception $e){

            echo json_encode(false);

        }
        
    }

?>