<?php

    class Conexao{

        public static function conectar(){

            $host = 'mysql:host=localhost;dbname=bdimposto;charset=utf8';
            $user = 'root';
            $senha = '';
            $conexao = new PDO($host, $user, $senha);

            $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conexao;

        }

    }

?>