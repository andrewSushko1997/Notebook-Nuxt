<template>
    <v-container fluid>
        <v-layout row justify-center>
            <v-flex md4 sm6 xs10>
                <v-card>
                    <v-card-title>
                        <div>
                            <h2 class="primary--text">Registration</h2>
                        </div>
                    </v-card-title>
                    <v-container fluid>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <v-text-field
                                        label="Login"
                                        v-model="login"
                                        :rules="[rules.required]"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                        label="Password"
                                        hint="At least 6 characters"
                                        min="6"
                                        v-model="password"
                                        type="password"
                                        :rules="[rules.required]"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                        label="E-mail"
                                        v-model="email"
                                        :rules="[rules.required, rules.email]"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-spacer></v-spacer>
                            <v-btn color="primary">Sign-Up</v-btn>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                login: '',
                email: '',
                password: '',
                rules: {
                    required: (value) => !!value || 'Required.',
                    email: (value) => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        return pattern.test(value) || 'Invalid e-mail.'
                    }
                }
            }
        }
    }
</script>