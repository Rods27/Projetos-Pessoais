from time import sleep
resposta = '1'
lista = []
lista2 = []
sleep(0.5)
print('\033[1;34mBem vindos a Loja Digital do\033[m \033[31mR\033[m\033[33mo\033[m\033[32md\033[m\033[34ms\033[m\n')
sleep(1.5)
while resposta == '1':
    produto = str(input('\033[34mQual o nome do produto que irá comprar?\033[34m '))
    lista.append(produto)
    preço = float(input('\033[34mQual o preço?\033[34mR$ '))
    lista2.append(preço)
    sleep(1)
    resposta = input('\n\033[1;37mDigite 1 para comprar outro produto.\nDigite 2 para checar seu Carrinho.\nDigite 3 para Encerrar suas compras.\n\033[1;37m')
    if resposta == '3':
        break
    while resposta == '2':
        if resposta == '2':
            i = len(lista)
            sleep(1)
            print('\n\033[1;35mSeu Carrinho contém:\033[m')
            for a in range(0, i):
                print(f'\033[34m{lista[a]} R${lista2[a]}')
        resposta = input('\n\033[1;37mDigite 1 para comprar outro produto.\nDigite 2 para checar seu Carrinho.\nDigite 3 para Encerrar suas compras.\n\033[1;37m')
        if resposta == '3':
            break
print(f'\n\033[1;34mO total da sua compra foi R$\033[1;31m {sum(lista2)}')
