<?php

    class Pagante{

        private $id;
        private $nome;
        private $sobrenome;
        private $cpf;
        private $rendimento;
        private $aliquota;
        private $divida;

        /*public function __construct($nome, $sobrenome, $cpf, $rendimento){
            $this->nome = $nome;
            $this->sobrenome = $sobrenome;
            $this->cpf = $cpf;
            $this->rendimento = $rendimento;
        }*/

        public function emArray(){
            return [
                'id' => $this->id,
                'nome' => $this->nome,
                'sobrenome' => $this->sobrenome,
                'cpf' => $this->cpf,
                'rendimento' => $this->rendimento,
                'aliquota' => $this->aliquota,
                'divida' => $this->divida
            ];
        }

        public function getId(){
            return $this->id;
        }

        public function setId($id){
            $this->id = $id;
        }

        public function getNome(){
            return $this->nome;
        }

        public function getSobrenome(){
            return $this->sobrenome;
        }

        public function getCpf(){
            return $this->cpf;
        }

        public function getRendimento(){
            return $this->rendimento;
        }

        public function getAliquota(){
            return $this->aliquota;
        }

        public function getDivida(){
            return $this->divida;
        }

        public function setNome($nome){
            $this->nome = $nome;
        }

        public function setSobrenome($sobrenome){
            $this->sobrenome = $sobrenome;
        }

        public function setCpf($cpf){
            $this->cpf = $cpf;
        }

        public function setRendimento($rendimento){
            $this->rendimento = $rendimento;
        }

        public function setAliquota($aliquota){
            $this->aliquota = $aliquota;
        }

        public function setDivida($divida){
            $this->divida = $divida;
        }

        public function calcularDivida(){

            $rendimento = $this->rendimento;
            $valor = '';
            $ali = 0;
            $conjunto = [];

            if ($rendimento < 22847.77){
                $valor = "Isento";

                $ali = 0;
                $conjunto = [$valor,$ali];

                return $conjunto;

            } else if ($rendimento < 33919.81) {
                $valor = ($rendimento - 1713.58)  * 0.075;

                $ali = 7.5;
                $conjunto = [$valor,$ali];
                return $conjunto;

            } else if ($rendimento < 45012.61) {
                $valor = ($rendimento - 4257.57) * 0.15;

                $ali = 15;
                $conjunto = [$valor,$ali];
                return $conjunto;

            } else if ($rendimento < 55976.17) {
                $valor = ($rendimento - 7633.51) * 0.225;

                $ali = 22.5;
                $conjunto = [$valor,$ali];

                return $conjunto;

            } else {
                $valor = ($rendimento - 10432.32) * 0.275;

                $ali = 27.5;
                $conjunto = [$valor,$ali];

                return $conjunto;
            }

        }

    }

?>