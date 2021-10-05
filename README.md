# MongoSample

Este é um exemplo de uso do ExpressJS + NodeJS + Mongo para fazer uma API.

Essa API não tem nenhum tipo de autenticação.

# MANUAL PARA GESTÃO DO CÓDIGO FONTE 

## **ORGANIZAÇÃO**

### **BRANCHS**

* Master
* Stable
* Develop
* Feature/HOTFIX Branchs

### **DEFINIÇÕES**

    1 - Branch Master -> 
    Vai conter a versão final do projeto com todas as RC alinhados de 
    acordo com o escopo (versão de Produção).
    2 - Branch Stable ->
    Vai conter as entregas das features desenvolvidas em nossas SPRINTS, sendo sempre
    atualizadas conforme o fim delas (versão de Homologação).
    3 - Branch Develop ->
    Vai conter as FEATURES já testadas e adicionadas separadamente conforme forem sendo
    entregues no decorrer da SPRINT.
    4 - Branch FEATURE/HOTFIX ->
    Vai conter todo o desenvolvimento de uma feature específica e seus testes unitários,
    após o fim dela a mesma será excluida e mergeada para Develop.
    PS: Usaremos /FEATURE para novas funcionalidades e /HOTFIX para ajustes de possíveis bugs que occorram.
    
    
 ![image](https://user-images.githubusercontent.com/62258809/135941753-b554aa54-a542-4be7-ab14-95501b95713e.png)

    
 ### **TAGS E VERSIONAMENTO**
 
    Será utilizado TAGS para controle de versão de cada realease, seguindo uma seguinte regra:
    Após o termino de desenvolvimento de uma feature e merge para Develop será criada a seguinte tag:
      vX.Y.Z.W - rc ->
     X -> Iniciará com número 1 e a cada grande ajuste ou alteração de uso de framework ou migração que impacte no fim será aumentado +1.
     Y -> Referente as novas funcionalidades, quando houver a criação de uma nova funcionalidade, o número deve ser incrementado.
     Z -> Refere-se a correções, sendo assim, realizada uma nova correção de bug deve-se incrementar. 
     W -> Será sempre incrementado para controle dos números de commit e a organização. <br />
   
    Para a Branch **Stable** as tags também serão criadas seguindo um padrão no git, da seguinte maneira:
      vX.Y.Z ->
     X -> Iniciará com número 1 e a cada grande ajuste ou alteração de uso de framework ou migração que impacte no fim será aumentado +1.
     Y -> Iniciando do 0 a cada implementação ou grande ajuste que envolva o BackEnd da aplicação e uso de APIs será incrementado +1.
     Z -> Iniciando do 0 a cada ajuste de bug(HOTFIX) será aumentado 1 dígito. 
    
   
 
 

